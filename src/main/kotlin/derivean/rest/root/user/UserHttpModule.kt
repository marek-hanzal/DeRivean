package derivean.rest.root.user

import derivean.lib.container.IContainer
import derivean.lib.http.AbstractHttpModule
import derivean.rest.root.user.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UserHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			UpdateEndpoint::class,
			FetchEndpoint::class,
			PageEndpoint::class,
			DeleteEndpoint::class,
			AttributesEndpoint::class,
			SearchEndpoint::class,
			StatisticsEndpoint::class,
		)
	}
}
