package derivean.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.TranslationRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val translationRepository: TranslationRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"/api/root/translation",
		"root.translation",
		translationRepository,
		fetchMapper,
	)
}
