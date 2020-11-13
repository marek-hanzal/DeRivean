package derivean.server.hero

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable
import org.jetbrains.exposed.sql.or
import java.util.*

class HeroRepository(container: IContainer) : AbstractRepository<Hero, HeroTable>(Hero, HeroTable, container) {
	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.limit(limit)
	}
}
