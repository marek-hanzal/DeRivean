package derivean.rest.game.user.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.rest.game.AbstractActionMapper
import derivean.server.user.UserResourceService
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

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
