package derivean.server.ability

import derivean.server.entity.Entity
import derivean.server.entity.EntityTable
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDEntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption
import java.util.*

object AbilityTable : UUIDTable("ability") {
	val entity = reference("entity", EntityTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val ability = varchar("ability", 128)
}

class Ability(id: EntityID<UUID>) : UUIDEntity(id) {
	companion object : UUIDEntityClass<Ability>(AbilityTable)

	var entity by Entity referencedOn AbilityTable.entity
	var name by AbilityTable.name
	var ability by AbilityTable.ability
}
