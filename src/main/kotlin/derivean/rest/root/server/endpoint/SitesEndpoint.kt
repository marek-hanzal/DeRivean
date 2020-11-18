package derivean.rest.root.server.endpoint

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
									"game",
									listOf(
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
