package derivean.server.kingdom

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.sql.or
import java.util.*

class KingdomRepository(container: IContainer) : AbstractAttributeRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container) {
	override val attributeRepository: KingdomAttributeRepository by container.lazy()

	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name like "%${search}%" or (table.id eq uuid) }.limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name like "%${search}%" }.limit(limit)
	}

	fun useTemplate(template: String, target: Kingdom) {
		attributes(target.id, find(template).attributes.map { Attribute(it.name, it.value) }.toTypedArray(), replace = false)
	}
}
