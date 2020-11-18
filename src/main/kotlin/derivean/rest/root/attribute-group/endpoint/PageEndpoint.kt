package derivean.rest.root.`attribute-group`.endpoint

import derivean.rest.root.AbstractPageEndpoint
import derivean.storage.repository.AttributeGroupRepository
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()
	private val fetchMapper: FetchMapper by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		"/api/root/attribute-group",
		"root.attribute-group",
		attributeGroupRepository,
		fetchMapper,
	)
}
