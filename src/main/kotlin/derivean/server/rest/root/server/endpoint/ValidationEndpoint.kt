package derivean.server.rest.root.server.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.routing.*

class ValidationEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/server/validation".let { url ->
			discovery {
				this.name = "root.server.validate"
				this.description = "Provides validation of server health (if all items for game rules and others are OK)"
				this.link = url
			}
			routing.get(url) {
				call.resolve(
					ok(
						Response(
							false, listOf(
//								Error("create-template-kingdom", "Missing template kingdom.", "create-template-kingdom"),
//								Error("create-template-user", "Missing template user.", "create-template-user"),
							)
						)
					)
				)
			}
		}
	}

	data class Response(val lockdown: Boolean, val errors: List<Error>)
	data class Error(val id: String, val text: String, val action: String)
}
