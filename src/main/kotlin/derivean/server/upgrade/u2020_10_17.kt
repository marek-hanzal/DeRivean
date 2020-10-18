package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.user.UserTable
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_10_17(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(UserTable)
		}
	}
}
