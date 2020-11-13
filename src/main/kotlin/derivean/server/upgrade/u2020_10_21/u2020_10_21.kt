package derivean.server.upgrade.u2020_10_21

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService

class u2020_10_21(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.transaction {
//			SchemaUtils.create(
//				UpgradeUserTable,
//				UpgradeUserAttributeTable,
//				UpgradeKingdomTable,
//				UpgradeKingdomAttributeTable,
//				UpgradeBuildingTable,
//				UpgradeBuildingAttributeTable,
//				UpgradeHeroTable,
//				UpgradeHeroAttributeTable,
//				UpgradeEntityTable,
//				UpgradeEntityAttributeTable,
//				UpgradeEquipmentTable,
//				UpgradeEquipmentAttributeTable,
//				inBatch = true,
//			)
		}
		storage.transaction {
//			UpgradeUser.new {
//				name = "The God"
//				login = "root"
//				password = authenticatorService.encrypt("root")
//				site = "root"
//			}
		}
	}
}
