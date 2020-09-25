package derivean.server.upgrade

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.ability.AbilityTable
import derivean.server.attribute.AttributeTable
import derivean.server.entity.EntityTable
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_09_25(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				EntityTable,
				AttributeTable,
				AbilityTable,
			)
		}
	}
}
