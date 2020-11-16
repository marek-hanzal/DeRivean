package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRelationRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.Building
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll
import java.util.*

class UserBuildingRepository(container: IContainer) : AbstractRelationRepository<Building, BuildingTable>(Building, BuildingTable, KingdomTable.user, container) {
	fun query(relation: UUID) = (entity.table innerJoin KingdomTable).selectAll().andWhere { column eq relation }

	override fun total(relation: UUID) = query(relation).count()

	override fun page(relation: UUID, page: Int, limit: Int, block: (Building) -> Unit) = query(relation).limit(limit, (page * limit).toLong()).forEach {
		block(entity.wrapRow(it))
	}
}
