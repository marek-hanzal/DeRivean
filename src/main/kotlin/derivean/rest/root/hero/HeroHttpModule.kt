package derivean.rest.root.hero

import derivean.rest.root.hero.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

@KtorExperimentalAPI
class HeroHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			FetchEndpoint::class,
			PageEndpoint::class,
			DeleteEndpoint::class,
		)
	}
}
