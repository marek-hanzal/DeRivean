package derivean.storage.repository

import derivean.storage.entities.BuildingEntity
import derivean.storage.tables.BuildingTable
import derivean.storage.tables.KingdomTable
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

	fun findByKingdomAndName(kingdom: String, building: String) = entity.wrapRow(table.innerJoin(KingdomTable).selectAll().andWhere { KingdomTable.name eq kingdom }.andWhere { table.name eq building }.first())
}
