package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService

class u2020_10_19_01(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.transaction {
			u2020_10_19.uUser.all().forEach {
				it.password = it.password?.let { password -> authenticatorService.encrypt(password) }
			}
		}
	}
}
