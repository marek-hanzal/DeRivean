package derivean.server.rest.root.hero.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.hero.HeroRepository
import derivean.server.hero.entities.Hero
import derivean.server.kingdom.KingdomRepository
import derivean.server.rest.AttributesMapper
import derivean.server.rest.common.Attributes

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, Hero>(container) {
	override val repository: HeroRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val attributesMapper: AttributesMapper by container.lazy()

	override fun map(request: Request, entity: Hero) {
		entity.name = request.name
		entity.kingdom = kingdomRepository.find(request.kingdom)
		entity.user = entity.kingdom.user
		repository.attributes(entity.id, attributesMapper.map(request.attributes))
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("hero_name_unique")) {
			return conflictWithUnique("Cannot create hero!", "name", "Duplicate hero name!")
		}
		return null
	}

	data class Request(val kingdom: String, val name: String, val attributes: Attributes?)
}
