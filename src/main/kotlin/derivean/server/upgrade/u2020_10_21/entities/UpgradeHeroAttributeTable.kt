package derivean.server.upgrade.u2020_10_21.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeHeroAttributeTable : UUIDTable("hero-attribute") {
	val hero = reference("hero", UpgradeHeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val name = varchar("name", 64)
	val value = double("value")
}
