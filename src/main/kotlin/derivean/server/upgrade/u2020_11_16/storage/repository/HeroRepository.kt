package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.HeroEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.HeroTable
import leight.container.IContainer
import leight.repository.AbstractRepository
import leight.storage.ilike
import org.jetbrains.exposed.sql.or
import java.util.*

class HeroRepository(container: IContainer) : AbstractRepository<HeroEntity, HeroTable>(HeroEntity, HeroTable, container) {
	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.limit(limit)
	}
}
