package derivean.server.kingdom

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.ilike
import derivean.server.attribute.AttributeRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable
import org.jetbrains.exposed.sql.SortOrder
import org.jetbrains.exposed.sql.or
import java.util.*

class KingdomRepository(container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container) {
	private val attributeRepository: AttributeRepository by container.lazy()

	fun findByName(name: String) = entity.find { table.name eq name }.first()

	fun search(search: String, limit: Int = 100) = try {
		val uuid = UUID.fromString(search)
		entity.find { table.name ilike "%${search}%" or (table.id eq uuid) }.orderBy(table.name to SortOrder.ASC).limit(limit)
	} catch (e: IllegalArgumentException) {
		entity.find { table.name ilike "%${search}%" }.orderBy(table.name to SortOrder.ASC).limit(limit)
	}

	fun useTemplate(template: UUID, target: Kingdom) = useTemplate(find(template), target)

	fun useTemplate(template: String, target: Kingdom) = useTemplate(search(template).first(), target)

	fun useTemplate(kingdom: Kingdom, target: Kingdom) {
		attributeRepository.attributes(target.attributes, kingdom.attributes.map { Attribute(it.name, it.value) }.toTypedArray(), replace = false)
	}
}
