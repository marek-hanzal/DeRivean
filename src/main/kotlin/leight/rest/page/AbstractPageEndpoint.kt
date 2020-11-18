package leight.rest.page

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.IMapper
import leight.repository.EntityFilter
import leight.repository.IRelationRepository
import leight.repository.IRepository
import leight.rest.*
import leight.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer, vararg val roles: String) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun <T : UUIDEntity> page(routing: Routing, url: String, name: String, repository: IRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null) {
		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [${repository.table().tableName}]."
		}
		routing.authenticate {
			withAnyRole(*roles) {
				get("$url/page") {
					call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
				}
				get("$url/page/{page}") {
					call.handle(logger) {
						ok(pageService.page(this, repository, mapper, filter))
					}
				}
			}
		}
	}

	fun <T : UUIDEntity> page(routing: Routing, relation: String, url: String, name: String, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null) {
		return page(routing, { call ->
			if (!call.parameters.contains(relation)) {
				call.resolve(badRequest("Missing relation parameter [$relation] in route [$url]! This is probably a server bug!"))
			}
			call.parameters[relation]!!
		}, url, name, repository, mapper, filter)
	}

	fun <T : UUIDEntity> page(routing: Routing, relation: suspend (ApplicationCall) -> String, url: String, name: String, repository: IRelationRepository<T>, mapper: IMapper<T, out Any>, filter: EntityFilter<T>? = null) {
		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [${repository.table().tableName}]."
		}
		routing.authenticate {
			withAnyRole(*roles) {
				get("$url/page") {
					call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
				}
				get("$url/page/{page}") {
					call.handle(logger) {
						ok(pageService.page(this, relation(call), repository, mapper, filter))
					}
				}
			}
		}
	}
}
