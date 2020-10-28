package derivean.server.rest.root.user.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.rest.badRequest
import derivean.lib.rest.page.AbstractPageEndpoint
import derivean.lib.rest.resolve
import derivean.server.kingdom.UserKingdomRepository
import derivean.server.rest.root.mapper.KingdomFetchMapper
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.routing.*

class PageEndpoint(container: IContainer) : AbstractPageEndpoint(container) {
	private val kingdomFetchMapper: KingdomFetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun install(routing: Routing) {
		val mapper = kingdomFetchMapper
		val url = "/api/root/user/{user}/kingdom"
		val name = "root.user.kingdom"

		discovery {
			this.name = "$name.page"
			this.link = "$url/page/{page}"
			this.description = "Retrieve given page of [Kingdom]."
		}
		routing.get("$url/page") {
			call.resolve(badRequest("Missing page parameter in url: [$url/{page}]."))
		}
		routing.get("$url/page/{page}") {
			handle(call) {
				pageService.page(call, UserKingdomRepository(storage.read { userRepository.find(call.parameters["user"]!!) }, container), mapper)
			}
		}
	}
}
