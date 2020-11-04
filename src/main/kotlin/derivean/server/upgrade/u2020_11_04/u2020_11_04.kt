package derivean.server.upgrade.u2020_11_04

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.translation.entities.TranslationTable
import org.jetbrains.exposed.sql.SchemaUtils

class u2020_11_04(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
			SchemaUtils.create(
				TranslationTable,
			)
		}
	}
}
