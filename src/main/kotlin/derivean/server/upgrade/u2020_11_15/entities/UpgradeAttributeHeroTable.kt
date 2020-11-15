package derivean.server.upgrade.u2020_11_15.entities

import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.ReferenceOption

object UpgradeAttributeHeroTable : UUIDTable("attribute-hero") {
	val hero = reference("hero", UpgradeHeroTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
	val attribute = reference("attribute", UpgradeAttributeTable, ReferenceOption.CASCADE, ReferenceOption.CASCADE)
}
