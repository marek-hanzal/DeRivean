package derivean.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/kingdom/update".let { url ->
			discovery {
				name = "root.kingdom.update"
				link = url
				description = "Update a Kingdom"
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
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>): Response<out Any> = item.request.let {
		if (it.attributes !== null && it.attributeGroup == null) {
			throw InvalidRequestException("When attributes are set, attribute group [attributeGroup] must be set too!")
		}
		ok(storage.write {
			fetchMapper.map(
				kingdomRepository.update(it.id) {
					it.name?.let { name -> this.name = name }
					this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(it.attributes))
				}
			)
		})
	}

	override fun exception(e: Throwable): Response<out Any>? = when {
		e.message?.contains("kingdom_name_unique") == true -> {
			conflictWithUnique("Cannot update Kingdom!", "name", "Kingdom with the given name already exists.")
		}
		else -> null
	}

	data class Request(
		val id: String,
		val name: String?,
		val attributeGroup: String?,
		val attributes: Attributes?,
	)
}
