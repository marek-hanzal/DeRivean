package derivean.rest.root.server.endpoint

import derivean.server.server.ValidationError
import derivean.server.server.ValidationService
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.rest.AbstractEndpoint
import leight.rest.ok
import leight.rest.resolve

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
