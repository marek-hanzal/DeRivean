package derivean.rest.root.`attribute-type`.endpoint

import derivean.lib.container.IContainer
import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.AttributeGroupTypeRepository
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val attributeGroupTypeRepository: AttributeGroupTypeRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"group",
		"/api/root/attribute-group/{group}/attribute-type",
		"root.attribute-group.attribute-type",
		attributeGroupTypeRepository,
		fetchMapper,
	)
}
