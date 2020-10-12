package derivean.lib.rest

import derivean.lib.container.IContainer
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRepository
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.response.*
import io.ktor.routing.*
import org.jetbrains.exposed.dao.UUIDEntity

abstract class AbstractFetchEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()

	fun <T : UUIDEntity> fetch(routing: Routing, url: String, mapper: IMapper<T, out Any>, repository: IRepository<T>, group: String, description: String) {
		discovery {
			this.group = group
			this.name = "fetch"
			this.link = url
			this.description = description
		}
		routing.get(url.replace("/{id}", "")) {
			call.badRequest("Missing id parameter in url: [$url].")
		}
		routing.get(url) {
			call.respond(
				mapper.map(storage.read {
					repository.find(call.parameters["id"]!!)
				})
			)
		}
	}
}
