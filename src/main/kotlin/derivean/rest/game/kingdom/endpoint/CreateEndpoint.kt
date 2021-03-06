package derivean.rest.game.kingdom.endpoint

import derivean.game.user.UserAttributes
import derivean.rest.game.AbstractCreateMapper
import derivean.server.user.UserResourceService
import derivean.storage.entities.KingdomEntity
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.conflictWithUnique

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
class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, KingdomEntity>(container) {
	override val repository: KingdomRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val userResourceService: UserResourceService by container.lazy()

	override fun validate(request: ApplicationRequest<Request>) {
		super.validate(request)
		user(request.call).let { user ->
			storage.read {
				userResourceService.check(user.name, user, UserAttributes.KINGDOM_LIMIT)
			}
		}
	}

	override fun map(request: ApplicationRequest<Request>, entity: KingdomEntity) = request.request.let {
		entity.name = it.name
		entity.user = user(request.call)
		repository.useTemplate("template", entity)
	}

	override fun exception(e: Throwable) = when {
		e.message?.contains("kingdom_name_unique") == true -> {
			conflictWithUnique("Cannot create Kingdom!", "name", "Kingdom with the given name already exists.")
		}
		else -> null
	}

	data class Request(
		val name: String,
	)
}
