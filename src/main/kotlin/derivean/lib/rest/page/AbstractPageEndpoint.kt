package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.badRequest
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.routing.*

abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun page(routing: Routing, url: String, repository: IRepository<*>, group: String, description: String) {
		discovery {
			this.group = group
			this.name = "page"
			this.link = "$url/page/{page}"
			this.description = description
		}
		routing.get("$url/page") {
			call.badRequest("Missing page parameter in url: [$url/page/{page}].")
		}
		routing.get("$url/page/{page}") {
			pageService.page(call, "$url/{id}", repository)
		}
	}
}
