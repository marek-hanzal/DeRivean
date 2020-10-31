package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import derivean.server.hero.HeroRepository
import io.ktor.routing.*

class FetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val heroRepository: HeroRepository by container.lazy()

	override fun install(routing: Routing) = fetch(
		routing,
		"/api/root/hero",
		"root.hero",
		fetchMapper,
		heroRepository,
	)
}
