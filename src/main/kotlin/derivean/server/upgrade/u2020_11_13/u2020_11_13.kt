package derivean.server.upgrade.u2020_11_13

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_13.entities.*
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_13(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				UpgradeAttributeTable,
				UpgradeUserTable,
				UpgradeUserAttributeTable,
				UpgradeRoleTable,
				UpgradeUserRoleTable,
				UpgradeKingdomTable,
				UpgradeKingdomAttributeTable,
				UpgradeBuildingTable,
				UpgradeBuildingAttributeTable,
				UpgradeHeroTable,
				UpgradeHeroAttributeTable,
				UpgradeEquipmentTable,
				UpgradeEquipmentAttributeTable,
				UpgradeEntityTable,
				UpgradeEntityAttributeTable,
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
