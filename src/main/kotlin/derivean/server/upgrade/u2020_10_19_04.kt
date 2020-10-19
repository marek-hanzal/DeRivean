package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService
import derivean.server.user.UserRepository

class u2020_10_19_04(container: IContainer) : AbstractUpgrade(container) {
	private val userRepository: UserRepository by container.lazy()
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.transaction {
			userRepository.findByLogin("root").let {
				it.site = "root"
				it.password = authenticatorService.encrypt("root")
			}
		}
	}
}
