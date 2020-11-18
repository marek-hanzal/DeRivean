package derivean.rest.root.building.endpoint

import derivean.storage.entities.BuildingEntity
import derivean.storage.repository.BuildingRepository
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractCreateMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import org.joda.time.DateTime

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/building/create".let { url ->
			discovery {
				name = "root.building.create"
				link = url
				description = "Creates a new Building"
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, BuildingEntity>(container) {
	override val repository: BuildingRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: BuildingEntity) = request.request.let {
		entity.name = it.name
		entity.description = it.description
		entity.build = it.built?.let { date -> DateTime(date) }
		entity.claim = it.claim?.let { date -> DateTime(date) }
		entity.kingdom = kingdomRepository.find(it.kingdom)
		entity.user = entity.kingdom.user
	}

	data class Request(
		val kingdom: String,
		val name: String,
		val description: String?,
		val built: String?,
		val claim: String?,
	)
}
