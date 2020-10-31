package derivean.lib.mapper

import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.created
import derivean.lib.rest.internalServerError
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.exceptions.ExposedSQLException

abstract class AbstractCreateMapper<T, E : UUIDEntity>(container: IContainer) : AbstractActionMapper<T, Response<out Any>>(container) {
	abstract val repository: IRepository<E>
	abstract val fetchMapper: IMapper<E, out Any>

	override fun resolve(item: T) = try {
		created(fetchMapper.map(storage.write {
			repository.create {
				map(item, this)
			}
		}))
	} catch (e: ExposedSQLException) {
		resolveException(e.message ?: "") ?: throw e
	} catch (e: Throwable) {
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	abstract fun map(request: T, entity: E)

	abstract fun resolveException(message: String): Response<out Any>?
}
