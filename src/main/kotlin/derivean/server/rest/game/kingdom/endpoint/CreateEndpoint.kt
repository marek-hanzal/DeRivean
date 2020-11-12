package derivean.server.rest.game.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.user.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/game/kingdom/create".let { url ->
			discovery {
				name = "game.kingdom.create"
				link = url
				description = "Creates a new Kingdom"
			}
			routing.authenticate {
				withAnyRole("game") {
					post(url) {
						resolve(call, createMapper)
					}
				}
			}
		}
	}
}

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, Kingdom>(container) {
	override val repository: KingdomRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: Kingdom) {
		// it's possible to use Pair<Call, Request> instead of <Request> and inject call to map here.
		TODO("find way how to extract user id from current request here (some service? How to bind current application call? - nope, concurrency)")
//		entity.name = request.name
//		entity.user = userRepository.find(request.user)
//		repository.useTemplate("template", entity)
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("kingdom_name_unique")) {
			return conflictWithUnique("Cannot create kingdom!", "name", "Duplicate kingdom name!")
		}
		return null
	}

	data class Request(
		val name: String,
	)
}
