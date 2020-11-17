package derivean.rest.root.`attribute-group`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.*
import derivean.storage.repository.AttributeGroupRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class UpdateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val updateMapper: UpdateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-group/update".let { url ->
			discovery {
				name = "root.attribute-group.update"
				link = url
				description = "Update a Attribute Group"
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
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				attributeGroupRepository.update(it.id) {
					this.name = it.name
					this.description = it.description
				}
			)
		}
	})

	override fun exception() = mapOf(
		"attribute-group_name_unique" to { conflictWithUnique("Cannot update Attribute Group!", "name", "Attribute Group with the given name already exists.") },
	)

	data class Request(
		val id: String,
		val name: String,
		val description: String?,
	)
}
