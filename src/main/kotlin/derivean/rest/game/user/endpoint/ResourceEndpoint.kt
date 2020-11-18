package derivean.rest.game.user.endpoint

import derivean.rest.game.AbstractActionMapper
import derivean.server.user.UserResourceService
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.ok
import leight.rest.resolve

@KtorExperimentalAPI
class ResourceEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val resourceMapper: ResourceMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/game/user/resource".let { url ->
			discovery {
				this.link = url
				this.name = "game.user.resource"
				this.description = "Displays user's resource usage."
			}
			routing.authenticate {
				withAnyRole("game", "root") {
					get(url) {
						call.resolve(resourceMapper.resolve(ApplicationRequest(call, Unit)))
					}
				}
			}
		}
	}
}

@KtorExperimentalAPI
class ResourceMapper(container: IContainer) : AbstractActionMapper<Unit>(container) {
	private val userResourceService: UserResourceService by container.lazy()

	override fun resolve(item: ApplicationRequest<Unit>) = ok(userResourceService.usage(user(item.call)))
}
