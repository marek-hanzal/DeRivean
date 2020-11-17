package derivean.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.ok
import derivean.storage.repository.TranslationRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class DeleteEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val deleteMapper: DeleteMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/delete".let { url ->
			discovery {
				name = "root.translation.delete"
				link = url
				description = "Delete a Translation"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, deleteMapper)
					}
				}
			}
		}
	}
}

class DeleteMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<DeleteMapper.Request>, Response<out Any>>(container) {
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		translationRepository.delete(item.request.id)
	})

	data class Request(val id: String)
}
