package derivean.server.hero

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.hero.entities.Hero
import derivean.server.hero.entities.HeroTable
import org.jetbrains.exposed.sql.or
import java.util.*

class HeroRepository(container: IContainer) : AbstractAttributeRepository<Hero, HeroTable>(Hero, HeroTable, container) {
	override val attributeRepository by container.lazy<HeroAttributeRepository>()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name like "${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name like "${search}%" }.limit(limit)
	}
}
