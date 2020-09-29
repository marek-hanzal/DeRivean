package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.entity.EntityAttributeTable
import derivean.server.entity.EntityTable
import derivean.server.equipment.EquipmentAttributeTable
import derivean.server.equipment.EquipmentTable
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_09_25(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				EntityTable,
				EntityAttributeTable,
				EquipmentTable,
				EquipmentAttributeTable,
			)
		}
	}
}
