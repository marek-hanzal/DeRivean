package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.kingdom.KingdomRepository
import derivean.server.user.UserRepository
import org.jetbrains.exposed.exceptions.ExposedSQLException

class CreateMapper(container: IContainer) : AbstractActionMapper<CreateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: Request) = try {
		created(storage.write {
			fetchMapper.map(
				kingdomRepository.create {
					this.name = item.name
					this.user = userRepository.find(item.user)
				}.also { kingdom ->
					kingdomRepository.attributes(kingdom.id, *item.attributes?.distinctBy { it.attribute }?.map { it.attribute to it.value }?.toTypedArray() ?: arrayOf())
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("kingdom_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot create Kingdom!"
					validation("name", "error", "Kingdom with the given name already exists.")
				})
			}
			else -> {
				throw e
			}
		}
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val user: String, val name: String, val attributes: List<Attribute>?)
	data class Attribute(val attribute: String, val value: Double)
}
