package derivean.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.http.withAnyRole
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.AbstractActionEndpoint
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.conflictWithUnique
import derivean.rest.AttributesMapper
import derivean.rest.common.Attributes
import derivean.storage.entities.HeroEntity
import derivean.storage.repository.AttributeRepository
import derivean.storage.repository.HeroRepository
import derivean.storage.repository.KingdomRepository
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.routing.*
import io.ktor.util.*

@KtorExperimentalAPI
class CreateEndpoint(container: IContainer) : AbstractActionEndpoint(container) {
	private val createMapper: CreateMapper by container.lazy()

	override fun install(routing: Routing) {
		"/api/root/hero/create".let { url ->
			discovery {
				name = "root.hero.create"
				link = url
				description = "Creates a new Hero"
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

class CreateMapper(container: IContainer) : AbstractCreateMapper<ApplicationRequest<CreateMapper.Request>, HeroEntity>(container) {
	override val repository: HeroRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()
	private val attributeRepository: AttributeRepository by container.lazy()

	override fun map(request: ApplicationRequest<Request>, entity: HeroEntity) = request.request.let {
		entity.name = it.name
		entity.kingdom = kingdomRepository.find(it.kingdom)
		entity.user = entity.kingdom.user
		entity.attributes = attributeRepository.attributes(entity.attributes, attributesMapper.map(it.attributes))
	}

	override fun exception() = mapOf(
		"hero_name_unique" to { conflictWithUnique("Cannot create Hero!", "name", "Hero with the given name already exists.") },
	)

	data class Request(
		val kingdom: String,
		val name: String,
		val attributes: Attributes?,
	)
}
