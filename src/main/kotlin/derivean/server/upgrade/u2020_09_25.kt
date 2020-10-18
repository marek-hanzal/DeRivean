package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_09_25(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				uPlayerTable,
				uEntityTable,
				uEntityAttributeTable,
				uEquipmentTable,
				uEquipmentAttributeTable,
				inBatch = true,
			)
		}
	}

	object uPlayerTable : UUIDTable("player") {
		val name = varchar("name", 128).uniqueIndex()
	}

	class uPlayer(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uPlayer>(uPlayerTable)

		var name by uPlayerTable.name
	}

	object uEntityTable : UUIDTable("entity") {
		val player = reference("player", uPlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val ancestor = reference("ancestor", uEntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
	}

	class uEntity(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEntity>(uEntityTable)

		var player by uPlayer referencedOn uEntityTable.player
		var name by uEntityTable.name
		var ancestor by uEntity optionalReferencedOn uEntityTable.ancestor
		val attributes by uEntityAttribute referrersOn uEntityAttributeTable.entity
	}

	object uEntityAttributeTable : UUIDTable("entity-attribute") {
		val entity = reference("entity", uEntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class uEntityAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEntityAttribute>(uEntityAttributeTable)

		var entity by uEntity referencedOn uEntityAttributeTable.entity
		var name by uEntityAttributeTable.name
		var value by uEntityAttributeTable.value
	}

	object uEquipmentTable : UUIDTable("equipment") {
		val name = varchar("name", 64)
	}

	class uEquipment(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEquipment>(uEquipmentTable)

		var name by uEquipmentTable.name
	}

	object uEquipmentAttributeTable : UUIDTable("equipment-attribute") {
		val equipment = reference("equipment", uEquipmentTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class uEquipmentAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEquipmentAttribute>(uEquipmentAttributeTable)

		var equipment by uEquipmentAttribute referencedOn uEquipmentAttributeTable.equipment
		var name by uEntityAttributeTable.name
		var value by uEntityAttributeTable.value
	}
}
