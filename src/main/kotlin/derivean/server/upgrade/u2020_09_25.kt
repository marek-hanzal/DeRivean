package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
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

	class Player(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<Player>(PlayerTable)

		var name by PlayerTable.name
	}

	object EntityTable : UUIDTable("entity") {
		val player = reference("player", PlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val ancestor = reference("ancestor", EntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
	}

	class Entity(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<Entity>(EntityTable)

		var player by Player referencedOn EntityTable.player
		var name by EntityTable.name
		var ancestor by Entity optionalReferencedOn EntityTable.ancestor
		val attributes by EntityAttribute referrersOn EntityAttributeTable.entity
	}

	object EntityAttributeTable : UUIDTable("entity-attribute") {
		val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class EntityAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<EntityAttribute>(EntityAttributeTable)

		var entity by Entity referencedOn EntityAttributeTable.entity
		var name by EntityAttributeTable.name
		var value by EntityAttributeTable.value
	}

	object EquipmentTable : UUIDTable("equipment") {
		val name = varchar("name", 64)
	}

	class Equipment(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<Equipment>(EquipmentTable)

		var name by EquipmentTable.name
	}

	object EquipmentAttributeTable : UUIDTable("equipment-attribute") {
		val equipment = reference("equipment", EquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class EquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<EquipmentAttribute>(EquipmentAttributeTable)

		var equipment by EquipmentAttribute referencedOn EquipmentAttributeTable.equipment
		var name by EntityAttributeTable.name
		var value by EntityAttributeTable.value
	}
}
