package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRepository
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.badRequest
import derivean.lib.rest.resolve
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.routing.*
import org.jetbrains.exposed.dao.UUIDEntity

abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun <T : UUIDEntity> page(routing: Routing, target: String, repository: IRepository<T>, mapper: IMapper<Any, out Any>) {
		discovery {
			this.group = target
			this.name = "page"
			this.link = "/api/$target/page/{page}"
			this.description = "Retrieve given page of [$target]."
		}
		routing.get("/api/$target/page") {
			call.resolve(badRequest("Missing page parameter in url: [/api/$target/page/{page}]."))
		}
		routing.get("/api/$target/page/{page}") {
			pageService.page(call, repository, mapper)
		}
	}
}
