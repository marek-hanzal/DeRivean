package derivean.server.upgrade.u2020_11_13

import com.github.doyaaaaaken.kotlincsv.dsl.csvReader
import com.vhl.blackmo.grass.dsl.grass
import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService
import derivean.server.translation.TranslationItem
import derivean.server.upgrade.u2020_11_13.entities.*
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.SizedCollection

@ExperimentalStdlibApi
class u2020_11_13(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

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
				UpgradeTranslationTable,
			)
		}
		val root = storage.transaction {
			UpgradeRole.new {
				name = "root"
			}
		}
		storage.transaction {
			UpgradeRole.new {
				name = "game"
			}
		}
		storage.transaction {
			UpgradeUser.new {
				name = "The God"
				login = "root"
				password = authenticatorService.encrypt("root")
				site = "root"
				roles = SizedCollection(root)
			}
		}
		storage.write {
			grass<TranslationItem>().harvest(csvReader().readAllWithHeader(javaClass.classLoader.getResourceAsStream("upgrade/u2020_11_13/translations.csv")!!)).forEach {
				UpgradeTranslation.new {
					language = it.language
					namespace = it.namespace
					label = it.label
					text = it.text
				}
			}
		}
	}
}
