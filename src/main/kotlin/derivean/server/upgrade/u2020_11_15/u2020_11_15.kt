package derivean.server.upgrade.u2020_11_15

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_15.entities.UpgradeAttributeTable
import derivean.server.upgrade.u2020_11_15.entities.UpgradeBuilding
import derivean.server.upgrade.u2020_11_15.entities.UpgradeBuildingTable
import derivean.server.upgrade.u2020_11_15.entities.UpgradeBuildingTableOpen
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_15(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			SchemaUtils.createMissingTablesAndColumns(
				UpgradeAttributeTable,
				UpgradeBuildingTableOpen,
			)
		}
		storage.write {
			UpgradeBuilding.all().forEach {
				it.user = it.kingdom.user
			}
		}
		storage.write {
			SchemaUtils.createMissingTablesAndColumns(
				UpgradeBuildingTable,
			)
		}
	}
}
