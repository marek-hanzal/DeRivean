package derivean.rest.root.user

import derivean.rest.root.user.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

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
			SearchEndpoint::class,
			StatisticsEndpoint::class,
		)
	}
}
