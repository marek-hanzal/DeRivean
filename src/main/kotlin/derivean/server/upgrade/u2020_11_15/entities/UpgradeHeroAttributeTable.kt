package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeHeroAttributeTable : UUIDTable("hero-attribute") {
	val hero = reference("hero", UpgradeHeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", UpgradeAttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
