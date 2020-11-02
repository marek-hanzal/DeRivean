package derivean.server.kingdom

import derivean.lib.container.IContainer
import derivean.server.attribute.AbstractAttributeRepository
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable

class KingdomRepository(container: IContainer) : AbstractAttributeRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container) {
	override val attributeRepository: KingdomAttributeRepository by container.lazy()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
