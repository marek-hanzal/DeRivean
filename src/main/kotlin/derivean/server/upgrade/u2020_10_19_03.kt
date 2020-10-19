package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_10_19_03(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
				uUserTable,
				inBatch = true,
			)
		}
	}

	object uUserTable : UUIDTable("user") {
		val name = varchar("name", 128).uniqueIndex()
		val login = varchar("login", 128).uniqueIndex()
		val password = varchar("password", 128).nullable()
		val token = varchar("token", 128).uniqueIndex().nullable()
		val site = varchar("site", 128).default("internal")
	}

	class uUser(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uUser>(uUserTable)

		var name by uUserTable.name
		var login by uUserTable.login
		var password by uUserTable.password
		var token by uUserTable.token
	}

	object uPlayerTable : UUIDTable("player") {
		val user = reference("user", uUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 128).uniqueIndex()
	}

	class uPlayer(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uPlayer>(uPlayerTable)

		var user by uUser referencedOn uPlayerTable.user
		var name by uPlayerTable.name
	}

	object uKingdomTable : UUIDTable("kingdom") {
		val player = reference("player", uPlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 128).uniqueIndex()
	}

	class uKingdom(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uKingdom>(uKingdomTable)

		var player by uPlayer referencedOn uKingdomTable.player
		var name by uKingdomTable.name
	}

	object uEntityTable : UUIDTable("entity") {
		val player = reference("player", uPlayerTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val ancestor = reference("ancestor", uEntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
		val name = varchar("name", 64)
	}

	class uEntity(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEntity>(uEntityTable)

		var player by uPlayer referencedOn uEntityTable.player
		var ancestor by uEntity optionalReferencedOn uEntityTable.ancestor
		var name by uEntityTable.name
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
