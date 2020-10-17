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

	fun <T : UUIDEntity> fetch(routing: Routing, target: String, mapper: IMapper<T, out Any>, repository: IRepository<T>) {
		discovery {
			this.group = target
			this.name = "fetch"
			this.link = "/api/$target/fetch/{id}"
			this.description = "Get [$target] by UUID."
		}
		routing.get("/api/$target/fetch") {
			call.badRequest("Missing id parameter in url: [/api/$target/fetch/{id}].")
		}
		routing.get("/api/$target/fetch/{id}") {
			call.respond(storage.read {
				mapper.map(
					repository.find(call.parameters["id"]!!)
				)
			})
		}
	}
}
