package derivean.rest.root.building.endpoint

import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.BuildingRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.AbstractActionEndpoint
import leight.rest.ApplicationRequest
import leight.rest.Response
import leight.rest.ok
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

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				buildingRepository.update(it.id) {
					it.name?.let { name -> this.name = name }
					it.description?.let { description -> this.description = description }
					this.build = it.built?.let { built -> DateTime(built) }
					it.attributes?.let { attributes -> this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(attributes)) }
				}
			)
		}
	})

	data class Request(
		val id: String,
		val name: String?,
		val description: String?,
		val built: String?,
		val attributes: Attributes?,
	)
}
