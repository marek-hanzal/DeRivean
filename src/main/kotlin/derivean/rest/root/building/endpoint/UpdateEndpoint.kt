package derivean.rest.root.building.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.server.attribute.AttributeRepository
import derivean.storage.repository.BuildingRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import org.joda.time.DateTime

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

class UpdateMapper(container: IContainer) : AbstractActionMapper<ApplicationRequest<UpdateMapper.Request>, Response<out Any>>(container) {
	private val fetchMapper: FetchMapper by container.lazy()
	private val buildingRepository: BuildingRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = try {
		ok(storage.write {
			item.request.let {
				fetchMapper.map(
					buildingRepository.update(it.id) {
						this.name = it.name
						this.description = it.description
						this.built = it.built?.let { built -> DateTime(built) }
						this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(it.attributes))
					}
				)
			}
		})
	} catch (e: Throwable) {
		logger.error(e.message, e)
		internalServerError(ValidationResponse.build {
			message = "Some ugly internal server error happened!"
		})
	}

	data class Request(
		val id: String,
		val name: String,
		val description: String?,
		val built: String?,
		val attributes: Attributes?,
	)
}