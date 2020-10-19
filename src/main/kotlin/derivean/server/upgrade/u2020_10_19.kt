package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.storage.drop
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.SchemaUtils
import org.jetbrains.exposed.sql.update

class u2020_10_19(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
				uUserNullableTable,
				inBatch = true,
			)
		}
		storage.transaction {
			/**
			 * Data migration (move current values to a new column).
			 */
			uUserNullableTable.update {
				it[login] = user
			}
		}
		storage.transaction {
			/**
			 * SchemaUtils will not drop any columns, thus it's necessary to kill them manually.
			 */
			uUserNullableTable.user.drop(this)
			SchemaUtils.createMissingTablesAndColumns(
				uUserTable,
				inBatch = true,
			)
		}
	}

	@Suppress("unused")
	private object uUserNullableTable : UUIDTable("user") {
		val name = varchar("name", 128).uniqueIndex()
		val user = varchar("user", 128).uniqueIndex()
		val login = varchar("login", 128).uniqueIndex().nullable()
		val password = varchar("password", 128).nullable()
		val token = varchar("token", 128).uniqueIndex().nullable()
	}

	object uUserTable : UUIDTable("user") {
		val name = varchar("name", 128).uniqueIndex()
		val login = varchar("login", 128).uniqueIndex()
		val password = varchar("password", 128).nullable()
		val token = varchar("token", 128).uniqueIndex().nullable()
	}

	class uUser(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uUser>(uUserTable)

		var name by uUserTable.name
		var login by uUserTable.login
		var password by uUserTable.password
		var token by uUserTable.token
	}

	object uPlayerTable : UUIDTable("player") {
		val name = varchar("name", 128).uniqueIndex()
		val user = reference("user", uUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	}

	class uPlayer(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uPlayer>(uPlayerTable)

		var name by uPlayerTable.name
		var user by uUser referencedOn uPlayerTable.user
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
