package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_10_17(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
				UserTable,
				PlayerTable,
			)
		}
	}


	object UserTable : UUIDTable("user") {
		val name = varchar("name", 128).uniqueIndex()
		val user = varchar("user", 128).uniqueIndex()
		val password = varchar("password", 128).nullable()
		val token = varchar("token", 128).uniqueIndex().nullable()
	}

	class User(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<User>(UserTable)

		var name by UserTable.name
		var user by UserTable.user
		var password by UserTable.password
		var token by UserTable.token
	}

	object PlayerTable : UUIDTable("player") {
		val name = varchar("name", 128).uniqueIndex()
		val user = reference("user", UserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	}

	class Player(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<Player>(PlayerTable)

		var name by PlayerTable.name
		var user by User referencedOn PlayerTable.user
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
