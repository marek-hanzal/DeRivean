package leight.rest

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.IMapper
import leight.repository.IRepository
import leight.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractFetchEndpoint(container: IContainer, vararg val roles: String) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()

	fun <T : UUIDEntity> fetch(routing: Routing, url: String, name: String, mapper: IMapper<T, out Any>, repository: IRepository<T>) {
		discovery {
			this.name = "$name.fetch"
			this.link = "$url/fetch/{id}"
			this.description = "Get [$name] by UUID."
		}
		routing.authenticate {
			withAnyRole(*roles) {
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
