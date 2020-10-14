package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.repository.IRepository
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.routing.*

abstract class AbstractPagesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun pages(routing: Routing, target: String, repository: IRepository<*>) {
		discovery {
			this.group = target
			this.name = "pages"
			this.link = "/$target/pages"
			this.description = "Paging support for [$target]."
		}
		routing.get("/$target/pages") {
			pageService.pages(call, repository)
		}
	}
}
