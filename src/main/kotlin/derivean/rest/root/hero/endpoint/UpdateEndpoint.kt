package derivean.rest.root.hero.endpoint

import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.HeroRepository
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
		"/api/root/hero/update".let { url ->
			discovery {
				name = "root.hero.update"
				link = url
				description = "Update a Hero"
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
	private val heroRepository: HeroRepository by container.lazy()
	private val attributeMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun resolve(item: ApplicationRequest<Request>) = ok(storage.write {
		item.request.let {
			fetchMapper.map(
				heroRepository.update(it.id) {
					it.name?.let { name -> this.name = name }
					this.attributes = attributeRepository.attributes(this.attributes, attributeMapper.map(it.attributes))
				}
			)
		}
	})

	override fun exception() = mapOf(
		"hero_name_unique" to { conflictWithUnique("Cannot update Hero!", "name", "Hero with the given name already exists.") },
	)

	data class Request(
		val id: String,
		val name: String?,
		val attributes: Attributes?,
	)
}
