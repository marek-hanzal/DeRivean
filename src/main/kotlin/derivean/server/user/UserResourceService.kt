package derivean.server.user

import derivean.game.user.UserAttributes
import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeResourceService
import derivean.storage.entities.User
import derivean.storage.repository.UserKingdomRepository

class UserResourceService(container: IContainer) : AbstractAttributeResourceService<User>(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun usages(): Map<String, (User) -> Double> = mapOf(
		usageOf(UserAttributes.KINGDOM_LIMIT) { userKingdomRepository.total(it.id.value).toDouble() }
	)

	override fun limits(): Map<String, (User) -> Double?> = mapOf(
		valueOf(UserAttributes.KINGDOM_LIMIT) { it.attributes }
	)
}
