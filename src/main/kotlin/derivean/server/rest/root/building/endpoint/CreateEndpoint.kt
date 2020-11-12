package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.Response
import derivean.server.building.BuildingRepository
import derivean.server.building.entities.Building
import derivean.server.kingdom.KingdomRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

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

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, Building>(container) {
	override val repository: BuildingRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()

	override fun map(request: Request, entity: Building) {
		entity.name = request.name
		entity.kingdom = kingdomRepository.find(request.kingdom)
		repository.attributes(entity.id, attributesMapper.map(request.attributes))
	}

	override fun resolveException(message: String): Response<out Any>? = null

	data class Request(val kingdom: String, val name: String, val attributes: Attributes?)
}
