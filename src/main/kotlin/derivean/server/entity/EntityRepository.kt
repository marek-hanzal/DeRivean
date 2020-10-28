package derivean.server.entity

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.EntityUUID
import derivean.server.entity.entities.Entity
import derivean.server.entity.entities.EntityTable

class EntityRepository(container: IContainer) : AbstractRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	private val entityAttributeRepository: EntityAttributeRepository by container.lazy()

	/**
	 * Replace Entity's attributes by the new ones.
	 */
	fun attributes(id: String, vararg attributes: Attribute) {
		find(id).let { entity ->
			entity.attributes.forEach {
				it.delete()
			}
			for (attribute in attributes) {
				entityAttributeRepository.create {
					this.entity = entity
					this.name = attribute.first
					this.value = attribute.second
				}
			}
		}
	}

	fun attributes(id: EntityUUID, vararg attributes: Attribute) = attributes(id.toString(), *attributes)

	fun findByNameOrNull(name: String) = entity.find { table.name eq name }.firstOrNull()

	fun findByName(name: String) = entity.find { table.name eq name }.first()
}
