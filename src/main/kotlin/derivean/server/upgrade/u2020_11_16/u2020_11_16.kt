package derivean.server.upgrade.u2020_11_16

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.upgrade.u2020_11_16.storage.tables.*
import org.jetbrains.exposed.sql.SchemaUtils

/**
 * This upgrade contains initial database structure. Just it.
 */
class u2020_11_16(container: IContainer) : AbstractUpgrade(container) {
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
	}
}
