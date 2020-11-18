package derivean.rest.public.common.endpoint

import derivean.storage.repository.TranslationRepository
import io.ktor.application.*
import io.ktor.routing.*
import leight.container.IContainer
import leight.mapper.AbstractActionMapper
import leight.rest.AbstractEndpoint
import leight.rest.Response
import leight.rest.ok
import leight.rest.resolve

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
