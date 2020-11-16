package derivean.server.upgrade.u2020_11_16

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.auth.AuthenticatorService
import derivean.server.translation.TranslationCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeGroup
import derivean.server.upgrade.u2020_11_16.storage.entities.Role
import derivean.server.upgrade.u2020_11_16.storage.entities.Translation
import derivean.server.upgrade.u2020_11_16.storage.entities.User
import derivean.server.upgrade.u2020_11_16.storage.tables.*
import org.jetbrains.exposed.sql.SchemaUtils

@ExperimentalStdlibApi
class u2020_11_16(container: IContainer) : AbstractUpgrade(container) {
	private val authenticatorService: AuthenticatorService by container.lazy()

	override fun upgrade() {
		storage.write {
			SchemaUtils.create(
				AttributeGroupTable,
				AttributeTable,
				UserTable,
				UserAttributeTable,
				RoleTable,
				UserRoleTable,
				KingdomTable,
				KingdomAttributeTable,
				HeroTable,
				HeroAttributeTable,
				BuildingTable,
				BuildingAttributeTable,
				EquipmentTable,
				EquipmentAttributeTable,
				EntityTable,
				EntityAttributeTable,
				TranslationTable,
			)
		}
		storage.write {
			Role.new {
				name = "root"
			}
			Role.new {
				name = "game"
			}
			User.new {
				name = "The God"
				login = "root"
				password = authenticatorService.encrypt("root")
				site = "root"
				roles = Role.find { RoleTable.name eq "root" }
			}
			AttributeGroup.new {
				name = "kingdom.common"
				description = "Attributes related to Kingdoms"
			}
			AttributeGroup.new {
				name = "kingdom.resource"
				description = "Attributes related to Kingdoms"
			}
			AttributeGroup.new {
				name = "building.common"
				description = "Attributes related to Buildings"
			}
			AttributeGroup.new {
				name = "building.cost"
				description = "Attributes related to Cost of Buildings"
			}
			AttributeGroup.new {
				name = "building.resource"
				description = "Attributes related to Building production (resources)"
			}
			AttributeGroup.new {
				name = "hero.common"
				description = "Attributes related to Heroes"
			}
			AttributeGroup.new {
				name = "hero.cost"
				description = "Attributes related to cost of Heroes"
			}
		}
		storage.write {
			TranslationCsv.translations("upgrade/u2020_11_13/translations.csv").forEach {
				Translation.new {
					language = it.language
					namespace = it.namespace
					label = it.label
					text = it.text
				}
			}
		}
	}
}
