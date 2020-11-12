package derivean.server.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.HttpServer
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.server.user.UserKingdomRepository
import derivean.server.user.UserRepository
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "game") {
	private val fetchMapper: FetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun install(routing: Routing) = page(
		routing,
		{
			storage.read { userRepository.findByTicket(it.authentication.principal<HttpServer.SessionTicket>()!!.id) }.id.toString()
		},
		"/api/game/user/kingdom",
		"game.user.kingdom",
		userKingdomRepository,
		fetchMapper,
	)
}
