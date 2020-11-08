package derivean.server.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.server.building.BuildingRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/building/update".let { url ->
			discovery {
				name = "root.building.update"
				link = url
				description = "Update a Building"
			}
			routing.authenticate {
				withAnyRole("root") {
					post(url) {
						resolve(call, updateMapper)
					}
				}
			}
		}
	}
}

class UpdateMapper(container: IContainer) : AbstractActionMapper<UpdateMapper.Request, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()

	override fun resolve(item: Request): Response<out Any> = try {
		ok(storage.write {
			fetchMapper.map(
				buildingRepository.update(item.id) {
					item.name?.let { this.name = it }
					buildingRepository.attributes(item.id, attributeMapper.map(item.attributes))
				}
			)
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val id: String,
		val name: String?,
		val attributes: Attributes?,
	)
}
