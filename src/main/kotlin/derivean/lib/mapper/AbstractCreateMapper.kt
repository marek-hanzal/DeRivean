package derivean.lib.mapper

import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.Response
import derivean.lib.rest.created
import org.jetbrains.exposed.dao.UUIDEntity

abstract class AbstractCreateMapper<T, E : UUIDEntity>(container: IContainer) : AbstractActionMapper<T, Response<out Any>>(container) {
	abstract val repository: IRepository<E>
	abstract val fetchMapper: IMapper<E, out Any>

	override fun resolve(item: T): Response<out Any> {
		validate(item)
		return created(storage.write {
			fetchMapper.map(
				repository.create {
					map(item, this)
				}
			)
		})
	}

	open fun validate(request: T) {
	}

	abstract fun map(request: T, entity: E): Any?
}
