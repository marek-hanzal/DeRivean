package derivean.rest.root.`attribute-group`

import derivean.rest.root.`attribute-group`.endpoint.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.AbstractHttpModule

@KtorExperimentalAPI
class AttributeGroupHttpModule(container: IContainer) : AbstractHttpModule(container) {
	override fun install(routing: Routing) {
		install(
			routing,
			CreateEndpoint::class,
			FetchEndpoint::class,
			UpdateEndpoint::class,
			DeleteEndpoint::class,
			PageEndpoint::class,
			ListEndpoint::class,
		)
	}
}
