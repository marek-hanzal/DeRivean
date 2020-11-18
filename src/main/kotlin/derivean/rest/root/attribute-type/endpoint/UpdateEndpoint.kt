package derivean.rest.root.`attribute-type`.endpoint

import derivean.storage.repository.AttributeTypeRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*
import leight.container.IContainer
import leight.http.withAnyRole
import leight.mapper.AbstractActionMapper
import leight.rest.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-type/update".let { url ->
			discovery {
				name = "root.attribute-type.update"
				link = url
				description = "Update an Attribute Type"
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
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				attributeTypeRepository.update(it.id) {
					this.name = it.name
					this.description = it.description
				}
			)
		}
	})

	override fun exception() = mapOf(
		"attribute-type_name_unique" to { conflictWithUnique("Cannot update Attribute Type!", "name", "Attribute Type with the given name already exists.") },
	)

	data class Request(
		val id: String,
		val name: String,
		val description: String?,
	)
}
