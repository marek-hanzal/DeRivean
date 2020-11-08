package derivean.server.rest.root.server.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class SitesEndpoint(container: IContainer) : AbstractEndpoint(container) {
	override fun install(routing: Routing) {
		"/api/root/server/sites".let { url ->
			discovery {
				this.name = "root.server.sites"
				this.link = url
				this.description = "Return list of available sites and default one."
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						call.resolve(
							ok(
								Response(
									"game", listOf(
										// null - means locked user (access to no site)
										null,
										// public is not listed as public is generally available
										"game",
										"root",
									)
								)
							)
						)
					}
				}
			}
		}
	}

	data class Response(val defaultSite: String, val sites: List<String?>)
}
