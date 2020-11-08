package derivean.server.rest.root.server.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.server.server.ValidationError
import derivean.server.server.ValidationService
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class ValidationEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val validationService: ValidationService by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/server/validation".let { url ->
			discovery {
				this.name = "root.server.validate"
				this.description = "Provides validation of server health (if all items for game rules and others are OK)"
				this.link = url
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						call.resolve(
							ok(
								Response(
									validationService.isLockdown(),
									validationService.validate(),
								)
							)
						)
					}
				}
			}
		}
	}

	data class Response(val lockdown: Boolean, val errors: List<ValidationError>)
}
