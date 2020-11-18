package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.BuildingEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.BuildingTable
import derivean.server.upgrade.u2020_11_16.storage.tables.KingdomTable
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.storage.ilike
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.or
import org.jetbrains.exposed.sql.selectAll
import java.util.*

class BuildingRepository(container: IContainer) : AbstractRepository<BuildingEntity, BuildingTable>(BuildingEntity, BuildingTable, container) {
	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.limit(limit)
	}

	fun findByKingdomAndName(kingdom: String, building: String) = BuildingEntity.wrapRow(BuildingTable.innerJoin(KingdomTable).selectAll().andWhere { KingdomTable.name eq kingdom }.andWhere { BuildingTable.name eq building }.first())
}
