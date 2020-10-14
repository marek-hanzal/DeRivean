package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRepository
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.badRequest
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.routing.*

abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun page(routing: Routing, target: String, repository: IRepository<*>, mapper: IMapper<Any, out Any>) {
		discovery {
			this.group = target
			this.name = "page"
			this.link = "$target/page/{page}"
			this.description = "Retrieve given page of [$target]."
		}
		routing.get("/$target/page") {
			call.badRequest("Missing page parameter in url: [/$target/page/{page}].")
		}
		routing.get("/$target/page/{page}") {
			pageService.page(call, repository, mapper)
		}
	}
}
