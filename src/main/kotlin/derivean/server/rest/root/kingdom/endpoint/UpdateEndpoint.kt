package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.kingdom.KingdomRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import io.ktor.application.*
import io.ktor.routing.*
import org.jetbrains.exposed.exceptions.ExposedSQLException

class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/update".let { url ->
			discovery {
				name = "root.kingdom.update"
				link = url
				description = "Update a Kingdom"
			}
			routing.post(url) {
				resolve(call, updateMapper)
			}
		}
	}
}

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				kingdomRepository.update(item.id) {
					item.name?.let { this.name = it }
					kingdomRepository.attributes(item.id, attributeMapper.map(item.attributes))
				}
			)
		})
	} catch (e: ExposedSQLException) {
		when {
			e.message?.contains("kingdom_name_unique") == true -> {
				conflict(ValidationResponse.build {
					message = "Cannot update Kingdom!"
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

	data class Request(
		val id: String,
		val name: String?,
		val attributes: Attributes?,
	)
}
