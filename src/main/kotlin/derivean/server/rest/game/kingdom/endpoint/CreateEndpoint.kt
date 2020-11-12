package derivean.server.rest.game.kingdom.endpoint

import derivean.game.user.UserAttributes
import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.rest.game.AbstractCreateMapper
import derivean.server.user.ResourceLimitService
import derivean.server.user.UserKingdomRepository
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
				withAnyRole("game", "root") {
					post(url) {
						resolve(call, createMapper)
					}
				}
			}
		}
	}
}

@KtorExperimentalAPI
class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, Kingdom>(container) {
	override val repository: KingdomRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val userKingdomRepository: UserKingdomRepository by container.lazy()
	private val resourceLimitService: ResourceLimitService by container.lazy()

	override fun validate(request: ApplicationRequest<Request>) {
		super.validate(request)
		user(request.call).let { user ->
			storage.read {
				resourceLimitService.check(user, UserAttributes.KINGDOM_LIMIT, userKingdomRepository.total(user.id.value))
			}
		}
	}

	override fun map(request: ApplicationRequest<Request>, entity: Kingdom) {
		request.request.let {
			entity.name = it.name
			entity.user = user(request.call)
			repository.useTemplate("template", entity)
		}
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
