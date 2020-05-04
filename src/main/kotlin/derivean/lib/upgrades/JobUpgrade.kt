package derivean.lib.upgrades

import derivean.lib.container.IContainer
import derivean.lib.job.entity.JobTable
import derivean.lib.upgrade.AbstractUpgrade
import org.jetbrains.exposed.sql.SchemaUtils

class JobUpgrade(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() = storage.transaction { SchemaUtils.create(JobTable) }
}
