package derivean.rest.root.translation.endpoint

import derivean.rest.root.AbstractFetchEndpoint
import derivean.storage.entities.TranslationEntity
import derivean.storage.repository.TranslationRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.mapper.AbstractMapper

@KtorExperimentalAPI
class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val translationRepository: TranslationRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/translation",
		"root.translation",
		fetchMapper,
		translationRepository,
	)
}

class FetchMapper(container: IContainer) : AbstractMapper<TranslationEntity, FetchMapper.Fetch>(container) {
	override fun map(item: TranslationEntity) = Fetch(
		item.id.toString(),
		item.language,
		item.namespace,
		item.label,
		item.text,
	)

	data class Fetch(
		val id: String,
		val language: String,
		val namespace: String,
		val label: String,
		val text: String,
	)
}

