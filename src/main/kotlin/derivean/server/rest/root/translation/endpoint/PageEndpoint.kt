package derivean.server.rest.root.translation.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.translation.TranslationRepository
import io.ktor.routing.*

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