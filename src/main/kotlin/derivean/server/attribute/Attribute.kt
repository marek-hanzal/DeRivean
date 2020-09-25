package derivean.server.attribute

import derivean.server.entity.Entity
import derivean.server.entity.EntityTable
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import java.util.*

object AttributeTable : UUIDTable("attribute") {
	val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}

class Attribute(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Attribute>(AttributeTable)

	var name by AttributeTable.name
	var entity by Entity referencedOn AttributeTable.entity
}
