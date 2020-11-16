package derivean.storage.entities

import derivean.lib.storage.EntityUUID
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import derivean.storage.tables.AttributeTable
import derivean.storage.tables.HeroAttributeTable
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass

class HeroAttribute(id: EntityUUID) : UUIDEntity(id) {
	companion object : UUIDEntityClass<HeroAttribute>(HeroAttributeTable)

	var hero by Hero referencedOn HeroTable.id
	var attribute by Attribute referencedOn AttributeTable.id
}
