package derivean.server.hero

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object HeroAttributeTable : UUIDTable("hero-attribute") {
	val hero = reference("hero", HeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
