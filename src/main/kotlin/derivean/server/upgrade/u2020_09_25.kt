package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_09_25(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				PlayerTable,
				EntityTable,
				EntityAttributeTable,
				EquipmentTable,
				EquipmentAttributeTable,
			)
		}
	}

	object PlayerTable : UUIDTable("player") {
		val name = varchar("name", 128).uniqueIndex()
	}

	object EntityTable : UUIDTable("entity") {
		val player = reference("player", PlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val ancestor = reference("ancestor", EntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
	}

	object EntityAttributeTable : UUIDTable("entity-attribute") {
		val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	object EquipmentTable : UUIDTable("equipment") {
		val name = varchar("name", 64)
	}

	object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
		val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}
}
