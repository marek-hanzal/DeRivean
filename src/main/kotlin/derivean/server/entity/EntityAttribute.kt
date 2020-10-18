package derivean.server.entity

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

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
