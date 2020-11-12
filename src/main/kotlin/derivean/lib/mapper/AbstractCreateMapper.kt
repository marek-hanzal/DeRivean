package derivean.lib.mapper

import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.*
import derivean.lib.user.ResourceLimitException
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.exceptions.ExposedSQLException

abstract class AbstractCreateMapper<T, E : UUIDEntity>(container: IContainer) : AbstractActionMapper<T, Response<out Any>>(container) {
	abstract val repository: IRepository<E>
	abstract val fetchMapper: IMapper<E, out Any>

	override fun resolve(item: T) = try {
		validate(item)
		created(storage.write {
			fetchMapper.map(
				repository.create {
					map(item, this)
				}
			)
		})
	} catch (e: ExposedSQLException) {
		resolveException(e.message ?: "") ?: throw e
	} catch (e: ResourceLimitException) {
		tooManyRequests(e.message ?: "Resource limit reached!")
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	open fun validate(request: T) {
	}

	abstract fun map(request: T, entity: E)

	open fun resolveException(message: String): Response<out Any>? = null
}
