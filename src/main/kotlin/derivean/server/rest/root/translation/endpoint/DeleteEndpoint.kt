package derivean.server.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.translation.TranslationRepository
import io.ktor.application.*
import io.ktor.routing.*

class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/delete".let { url ->
			discovery {
				name = "root.translation.delete"
				link = url
				description = "Delete a Translation"
			}
			routing.post(url) {
				resolve(call, deleteMapper)
			}
		}
	}
}

class DeleteMapper(container: IContainer) : AbstractActionMapper<DeleteMapper.Request, Response<out Any>>(container) {
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: Request) = try {
		ok(storage.write {
			translationRepository.delete(item.id)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(val id: String)
}
