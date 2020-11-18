package derivean.server.user

import derivean.game.user.UserAttributes
import derivean.server.attribute.AbstractAttributeResourceService
import derivean.storage.entities.UserEntity
import derivean.storage.repository.UserKingdomRepository
import leight.container.IContainer

class UserResourceService(container: IContainer) : AbstractAttributeResourceService<UserEntity>(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()

	override fun usages(): Map<String, (UserEntity) -> Double> = mapOf(
		usageOf(UserAttributes.KINGDOM_LIMIT) { userKingdomRepository.total(it.id.value).toDouble() }
	)

	override fun limits(): Map<String, (UserEntity) -> Double?> = mapOf(
		valueOf(UserAttributes.KINGDOM_LIMIT) { it.attributes }
	)
}
