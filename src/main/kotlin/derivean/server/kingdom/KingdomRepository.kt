package derivean.server.kingdom

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.EntityUUID
import derivean.server.kingdom.entities.Kingdom
import derivean.server.kingdom.entities.KingdomTable

class KingdomRepository(container: IContainer) : AbstractRepository<Kingdom, KingdomTable>(Kingdom, KingdomTable, container) {
	private val kingdomAttributeRepository: KingdomAttributeRepository by container.lazy()

	fun attributes(id: String, vararg attributes: Attribute) {
		find(id).let { kingdom ->
			kingdom.attributes.forEach {
				it.delete()
			}
			for (attribute in attributes) {
				kingdomAttributeRepository.create {
					this.kingdom = kingdom
					this.name = attribute.first
					this.value = attribute.second
				}
			}
		}
	}

	fun attributes(id: EntityUUID, attributes: Array<Attribute>) = attributes(id.toString(), *attributes)
}
