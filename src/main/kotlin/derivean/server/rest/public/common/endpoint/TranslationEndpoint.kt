package derivean.server.rest.public.common.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.Response
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.server.translation.TranslationRepository
import io.ktor.application.*
import io.ktor.routing.*

class TranslationEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val translationMapper: TranslationMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/public/translation".let { url ->
			discovery {
				this.link = url
				this.name = "public.translation"
				this.description = "Retrieve all translations."
			}
			routing.get(url) {
				call.resolve(translationMapper.resolve(Unit))
			}
		}
	}
}

class TranslationMapper(container: IContainer) : AbstractActionMapper<Unit, Response<out Any>>(container) {
	private val translationRepository: TranslationRepository by container.lazy()

	override fun resolve(item: Unit) = storage.read {
		ok(
			Translations(
				translationRepository.all().map { Translation(it.language, it.namespace, it.label, it.text) }
			)
		)
	}

	data class Translations(
		val translations: List<Translation>,
	)

	data class Translation(
		val language: String,
		val namespace: String,
		val label: String,
		val text: String,
	)
}
