package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.storage.entities.Building
import derivean.storage.tables.BuildingTable
import org.jetbrains.exposed.sql.or
import java.util.*

class BuildingRepository(container: IContainer) : AbstractRepository<Building, BuildingTable>(Building, BuildingTable, container) {
	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.limit(limit)
	}
}
