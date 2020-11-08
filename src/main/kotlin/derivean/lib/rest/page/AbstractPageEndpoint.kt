package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.IMapper
import derivean.lib.repository.IRelationRepository
import derivean.lib.repository.IRepository
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.badRequest
import derivean.lib.rest.resolve
import derivean.lib.storage.IStorage
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun <T : UUIDEntity> page(routing: Routing, url: String, name: String, repository: IRepository<T>, mapper: IMapper<T, out Any>) {
		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [${repository.table().tableName}]."
		}
		routing.authenticate {
			withAnyRole("root") {
				get("$url/page") {
					call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
				}
				get("$url/page/{page}") {
					handle(call) {
						pageService.page(call, repository, mapper)
					}
				}
			}
		}
	}

	fun <T : UUIDEntity> page(routing: Routing, relation: String, url: String, name: String, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>) {
		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [${repository.table().tableName}]."
		}
		routing.authenticate {
			withAnyRole("root") {
				get("$url/page") {
					call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
				}
				get("$url/page/{page}") {
					if (!call.parameters.contains(relation)) {
						call.resolve(badRequest("Missing relation parameter [$relation] in route [$url]! This is probably a server bug!"))
					}
					handle(call) {
						pageService.page(call, call.parameters[relation]!!, repository, mapper)
					}
				}
			}
		}
	}
}
