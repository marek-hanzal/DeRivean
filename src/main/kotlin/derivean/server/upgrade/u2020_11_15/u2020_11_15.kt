package derivean.server.upgrade.u2020_11_15

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_15.entities.*
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_15(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			SchemaUtils.createMissingTablesAndColumns(
				UpgradeAttributeTable,
				UpgradeBuildingTableOpen,
				UpgradeAttributeBuildingTable,
				UpgradeAttributeHeroTable,
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
