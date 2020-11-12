package derivean.server.user

import derivean.game.user.UserAttributes
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.user.ResourceLimitException
import derivean.server.user.entities.User

class UserResourceService(container: IContainer) : AbstractService(container) {
	private val userKingdomRepository: UserKingdomRepository by container.lazy()
	lateinit var resourceMap: Map<String, (User) -> Double>

	override fun onSetup() {
		super.onSetup()
		resourceMap = mapOf(
			UserAttributes.KINGDOM_LIMIT to { userKingdomRepository.total(it.id.value).toDouble() }
		)
	}

	fun check(user: User, resource: String) {
		resourceMap.getOrDefault(resource) { 0.0 }.let { usage ->
			val current = usage(user)
			user.attributes
				.filter { it.name == resource && current >= it.value }
				.forEach {
					throw ResourceLimitException("User [${user.name}] exceeded resource usage [${resource}] of [$current / ${it.value} max]!")
				}
		}
	}
}
