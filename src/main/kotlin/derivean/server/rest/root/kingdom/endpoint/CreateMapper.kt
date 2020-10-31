package derivean.server.rest.root.kingdom.endpoint

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractCreateMapper
import derivean.lib.rest.Response
import derivean.lib.rest.conflictWithUnique
import derivean.server.kingdom.KingdomRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.user.UserRepository

class CreateMapper(container: IContainer) : AbstractCreateMapper<CreateMapper.Request, Kingdom>(container) {
	override val repository: KingdomRepository by container.lazy()
	override val fetchMapper: FetchMapper by container.lazy()
	private val userRepository: UserRepository by container.lazy()

	override fun map(request: Request, entity: Kingdom) {
		entity.name = request.name
		entity.user = userRepository.find(request.user)
		repository.attributes(entity.id, *request.attributes?.distinctBy { it.attribute }?.map { it.attribute to it.value }?.toTypedArray() ?: arrayOf())
	}

	override fun resolveException(message: String): Response<out Any>? {
		if (message.contains("kingdom_name_unique")) {
			return conflictWithUnique("Cannot create kingdom!", "name", "Duplicate kingdom name!")
		}
		return null
	}

	data class Request(val user: String, val name: String, val attributes: List<Attribute>?)
	data class Attribute(val attribute: String, val value: Double)
}
