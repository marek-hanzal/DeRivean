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

class u2020_10_20(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.createMissingTablesAndColumns(
				uHeroTable,
				uHeroAttributeTable,
				uKingdomNullableTable,
				uKingdomAttributeTable,
				inBatch = true,
			)
		}
		storage.transaction {
			uKingdomNullable.all().forEach {
				it.user = uPlayer.findById(it.player)!!.user
			}
		}
		storage.transaction {
			u2020_10_19_03.uEntityTable.player.drop(this)
			uKingdomNullableTable.player.drop(this)
			uPlayerTable.drop(this)
		}
		storage.transaction {
			uUser.all().forEach {
				if (uKingdom.find { uKingdomTable.user eq it.id }.count() <= 0) {
					uKingdom.new {
						this.name = it.id.toString()
						this.user = it
					}
				}
			}
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
		var site by uUserTable.site
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

	object uKingdomNullableTable : UUIDTable("kingdom") {
		val player = uuid("player")
		val user = reference("user", uUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE).nullable()
		val name = varchar("name", 128).uniqueIndex()
	}

	class uKingdomNullable(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uKingdomNullable>(uKingdomNullableTable)

		var player by uKingdomNullableTable.player
		var user by uUser optionalReferencedOn uKingdomNullableTable.user
		var name by uKingdomNullableTable.name
	}

	object uKingdomTable : UUIDTable("kingdom") {
		val user = reference("user", uUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 128).uniqueIndex()
	}

	class uKingdom(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uKingdom>(uKingdomTable)

		var user by uUser referencedOn uKingdomTable.user
		var name by uKingdomTable.name
	}

	object uKingdomAttributeTable : UUIDTable("kingdom-attribute") {
		val kingdom = reference("kingdom", uKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class uKingdomAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uKingdomAttribute>(uKingdomAttributeTable)

		var kingdom by uKingdom referencedOn uKingdomAttributeTable.kingdom
		var name by uKingdomAttributeTable.name
		var value by uKingdomAttributeTable.value
	}

	object uHeroTable : UUIDTable("hero") {
		val user = reference("user", uUserTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val kingdom = reference("kingdom", uKingdomTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 128).uniqueIndex()
	}

	class uHero(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uHero>(uHeroTable)

		var user by uUser referencedOn uHeroTable.user
		var kingdom by uKingdom referencedOn uHeroTable.kingdom
		var name by uHeroTable.name
	}

	object uHeroAttributeTable : UUIDTable("hero-attribute") {
		val hero = reference("hero", uHeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
		val name = varchar("name", 64)
		val value = double("value")
	}

	class uHeroAttribute(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uHeroAttribute>(uHeroAttributeTable)

		var hero by uHero referencedOn uHeroAttributeTable.hero
		var name by uHeroAttributeTable.name
		var value by uHeroAttributeTable.value
	}

	object uEntityTable : UUIDTable("entity") {
		val ancestor = reference("ancestor", uEntityTable, ReferenceOption.SET_NULL, ReferenceOption.SET_NULL).nullable()
		val name = varchar("name", 64)
	}

	class uEntity(id: EntityUUID) : UUIDEntity(id) {
		companion object : UUIDEntityClass<uEntity>(uEntityTable)

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
