package derivean.server.upgrade.u2020_11_15

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_15(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.write {
			SchemaUtils.createMissingTablesAndColumns(
//				UpgradeAttributeTable,
//				UpgradeBuildingTableOpen,
//				UpgradeAttributeGroupTable,
//				UpgradeAttributeGroupRelationTable,
			)
		}
		storage.write {
//			UpgradeBuilding.all().forEach {
//				it.user = it.kingdom.user
//			}
//			UpgradeAttributeGroup.new {
//				name = "building"
//				description = "Attributes related to Buildings"
//			}
//			UpgradeAttributeGroup.new {
//				name = "building.cost"
//				description = "Attributes related to Cost of Buildings"
//			}
//			UpgradeAttributeGroup.new {
//				name = "building.production"
//				description = "Attributes related to Building Production"
//			}
//			UpgradeAttributeGroup.new {
//				name = "hero"
//				description = "Attributes related to Heroes"
//			}
		}
		storage.write {
//			SchemaUtils.createMissingTablesAndColumns(
//				UpgradeBuildingTable,
//			)
		}
	}
}
