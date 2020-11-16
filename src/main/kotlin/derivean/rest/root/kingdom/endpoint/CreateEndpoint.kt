package derivean.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.storage.entities.Kingdom
import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import java.util.*

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/create".let { url ->
			discovery {
				name = "root.kingdom.create"
				link = url
				description = "Creates a new Kingdom"
			}
			routing.authenticate {
				withAnyRole("root") {
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
		request.request.let {
			entity.name = it.name
			entity.user = userRepository.find(it.user)
			it.template?.let { template ->
				repository.useTemplate(template, entity)
			}
		}
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("kingdom_name_unique")) {
			return conflictWithUnique("Cannot create kingdom!", "name", "Duplicate kingdom name!")
		}
		return null
	}

	data class Request(
		val user: String,
		val name: String,
		val template: UUID?,
	)
}
