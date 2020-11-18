package derivean.storage.entities

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.storage.tables.AttributeTable
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.sql.SizedIterable

class AttributeEntity(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<AttributeEntity>(AttributeTable)

	var type by AttributeTypeEntity referencedOn AttributeTable.type
	var value by AttributeTable.value
}

fun SizedIterable<AttributeEntity>.getAttributes(group: String) = Attributes.from(filter { it.type.group.name == group }.map { Attribute(it.type.name, it.value) })
