package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.kingdom.KingdomRepository
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/delete".let { url ->
			discovery {
				name = "root.kingdom.delete"
				link = url
				description = "Delete a Kingdom"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}

class DeleteMapper(container: IContainer) : AbstractActionMapper<DeleteMapper.Request, Response<out Any>>(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.write {
			kingdomRepository.delete(item.id)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val id: String)
}
