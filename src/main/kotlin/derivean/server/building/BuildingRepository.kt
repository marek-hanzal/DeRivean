package derivean.server.building

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.building.entities.Building
import derivean.server.building.entities.BuildingTable
import org.jetbrains.exposed.sql.or
import java.util.*

class BuildingRepository(container: IContainer) : AbstractAttributeRepository<Building, BuildingTable>(Building, BuildingTable, container) {
	override val attributeRepository: BuildingAttributeRepository by container.lazy()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name like "${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name like "${search}%" }.limit(limit)
	}
}
