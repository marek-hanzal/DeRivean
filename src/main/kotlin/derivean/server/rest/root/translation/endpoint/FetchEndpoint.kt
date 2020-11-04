package derivean.server.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractMapper
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.translation.TranslationRepository
import derivean.server.translation.entities.Translation
import io.ktor.routing.*

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

class FetchMapper(container: IContainer) : AbstractMapper<Translation, FetchMapper.Fetch>(container) {
	override fun map(item: Translation) = Fetch(
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

