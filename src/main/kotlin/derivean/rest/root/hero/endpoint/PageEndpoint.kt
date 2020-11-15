package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.KingdomHeroRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val kingdomHeroRepository: KingdomHeroRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"kingdom",
		"/api/root/kingdom/{kingdom}/hero",
		"root.kingdom.hero",
		kingdomHeroRepository,
		fetchMapper,
	)
}
