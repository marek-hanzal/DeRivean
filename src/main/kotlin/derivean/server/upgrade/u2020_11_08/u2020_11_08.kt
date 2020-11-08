package derivean.server.upgrade.u2020_11_08

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_08.entities.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SizedCollection

class u2020_11_08(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
				UpgradeRoleTable,
				UpgradeUserRoleTable,
			)
		}
		val root = storage.transaction {
			UpgradeRole.new {
				name = "root"
			}
		}
		storage.transaction {
			UpgradeRole.new {
				name = "gamer"
			}
		}
		storage.transaction {
			UpgradeUser.find { UpgradeUserTable.site eq "root" }.map {
				it.roles = SizedCollection(listOf(root))
			}
		}
	}
}
