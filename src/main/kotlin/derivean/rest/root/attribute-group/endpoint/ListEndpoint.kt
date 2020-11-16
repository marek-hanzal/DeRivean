package derivean.rest.root.`attribute-group`.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.rest.ok
import derivean.lib.rest.resolve
import derivean.lib.storage.IStorage
import derivean.storage.repository.AttributeGroupRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class ListEndpoint(container: IContainer) : AbstractEndpoint(container) {
	private val storage: IStorage by container.lazy()
	private val attributeGroupRepository: AttributeGroupRepository by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/attribute-group/{name}/attribute-type/list".let { url ->
			discovery {
				this.link = url
				this.name = "root.attribute-group.attribute-type.list"
				this.description = "Returns simple list (names) of attribute types."
			}
			routing.authenticate {
				withAnyRole("root") {
					get(url) {
						handle(call) {
							resolve(ok(storage.read { attributeGroupRepository.findByName(call.parameters["name"]!!).types.map { Item(it.id.toString(), it.name) } }))
						}
					}
				}
			}
		}
	}

	data class Item(
		val id: String,
		val name: String,
	)
}
