package derivean.lib.rest

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRepository
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractFetchEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()

	fun <T : UUIDEntity> fetch(routing: Routing, url: String, name: String, mapper: IMapper<T, out Any>, repository: IRepository<T>) {
		discovery {
			this.name = "$name.fetch"
			this.link = "$url/fetch/{id}"
			this.description = "Get [$name] by UUID."
		}
		routing.authenticate {
			withAnyRole("root") {
				get(url) {
					call.resolve(badRequest("Missing id parameter in url: [$url/fetch/{id}]."))
				}
				get("$url/fetch/{id}") {
					call.respond(storage.read {
						mapper.map(
							repository.find(call.parameters["id"]!!)
						)
					})
				}
			}
		}
	}
}
