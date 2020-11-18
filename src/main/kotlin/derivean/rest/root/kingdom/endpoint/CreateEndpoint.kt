package derivean.rest.root.kingdom.endpoint

import derivean.storage.entities.KingdomEntity
import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractCreateMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.conflictWithUnique
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, KingdomEntity>(container) {
	override val repository: KingdomRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: KingdomEntity) {
		request.request.let {
			entity.name = it.name
			entity.user = userRepository.find(it.user)
			it.template?.let { template ->
				repository.useTemplate(template, entity)
			}
		}
	}

	override fun exception() = mapOf(
		"kingdom_name_unique" to { conflictWithUnique("Cannot create Kingdom!", "name", "Kingdom with the given name already exists.") },
	)

	data class Request(
		val user: String,
		val name: String,
		val template: UUID?,
	)
}
