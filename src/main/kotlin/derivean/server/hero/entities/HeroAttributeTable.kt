package derivean.server.hero.entities

import derivean.server.attribute.tables.AttributeTable
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object HeroAttributeTable : UUIDTable("hero-attribute") {
	val hero = reference("hero", HeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", AttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
