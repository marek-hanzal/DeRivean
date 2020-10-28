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

	fun <T : UUIDEntity> page(routing: Routing, url: String, name: String, repository: IRepository<T>, mapper: IMapper<T, out Any>) {
		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [${repository.table().tableName}]."
		}
		routing.get("$url/page") {
			call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
		}
		routing.get("$url/page/{page}") {
			handle(call) {
				pageService.page(call, repository, mapper)
			}
		}
	}
}
