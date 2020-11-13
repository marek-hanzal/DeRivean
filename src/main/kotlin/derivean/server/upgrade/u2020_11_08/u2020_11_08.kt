package derivean.server.upgrade.u2020_11_08

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_08(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
			)
		}
		val root = storage.transaction {
//			UpgradeRole.new {
//				name = "root"
//			}
		}
		storage.transaction {
//			UpgradeRole.new {
//				name = "game"
//			}
		}
		storage.transaction {
//			UpgradeUser.find { UpgradeUserTable.site eq "root" }.map {
//				it.roles = SizedCollection(listOf(root))
//			}
		}
	}
}
