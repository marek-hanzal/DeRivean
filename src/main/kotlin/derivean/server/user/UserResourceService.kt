package derivean.server.user

import derivean.game.user.UserAttributes
import derivean.lib.container.IContainer
import derivean.lib.resource.AbstractResourceService
import derivean.server.attribute.EntityWithAttributesType
import derivean.server.resource.limitOf

class UserResourceService(container: IContainer) : AbstractResourceService<EntityWithAttributesType>(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun usages(): Map<String, (EntityWithAttributesType) -> Double> = mapOf(
		UserAttributes.KINGDOM_LIMIT to { userKingdomRepository.total(it.id.value).toDouble() },
	)

	override fun limits(): Map<String, (EntityWithAttributesType) -> Double?> = mapOf(
		limitOf(UserAttributes.KINGDOM_LIMIT),
	)
}
