package derivean.server.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.server.translation.TranslationRepository
import derivean.server.translation.entities.Translation
import io.ktor.application.*
import io.ktor.routing.*

class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/translation/create".let { url ->
			discovery {
				name = "root.translation.create"
				link = url
				description = "Creates a new Translation"
			}
			routing.post(url) {
				resolve(call, createMapper)
			}
		}
	}
}

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, Translation>(container) {
	override val repository: TranslationRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()

	override fun map(request: Request, entity: Translation) {
		entity.language = request.language
		entity.namespace = request.namespace ?: "translation"
		entity.label = request.label
		entity.text = request.text
	}

	data class Request(
		val language: String,
		val namespace: String?,
		val label: String,
		val text: String,
	)
}
