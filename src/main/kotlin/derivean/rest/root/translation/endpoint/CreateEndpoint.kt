package derivean.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.*
import derivean.storage.entities.Translation
import derivean.storage.repository.TranslationRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/create".let { url ->
			discovery {
				name = "root.translation.create"
				link = url
				description = "Creates a new Translation"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, createMapper)
					}
				}
			}
		}
	}
}

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, Translation>(container) {
	override val repository: TranslationRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: Translation) {
		request.request.let {
			entity.language = it.language
			entity.namespace = it.namespace ?: "translation"
			entity.label = it.label
			entity.text = it.text
		}
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("translation_unique")) {
			return conflict(ValidationResponse.build {
				this.message = "Cannot create Translation!"
				this.validation("language", "error", "Language or label already exists!")
				this.validation("label", "error", "Language or label already exists!")
			})
		}
		return null
	}

	data class Request(
		val language: String,
		val namespace: String?,
		val label: String,
		val text: String,
	)
}
