package derivean.server.user

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.user.ResourceLimitException
import derivean.server.user.entities.User

class ResourceLimitService(container: IContainer) : AbstractService(container) {
	fun check(user: User, attribute: String, current: Double) {
		user.attributes
			.filter { it.name == attribute && current >= it.value }
			.forEach {
				throw ResourceLimitException("User [${user.name}] exceeded resource usage [${attribute}] of [$current / ${it.value} max]!")
			}
	}

	fun check(user: User, attribute: String, current: Long) = check(user, attribute, current.toDouble())
}
