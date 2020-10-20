package derivean.server.entity

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.EntityUUID

class EntityRepository(container: IContainer) : AbstractRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	fun create(ancestor: String?, block: Entity.() -> Unit) = create {
		block(this)
		ancestor?.let {
			this.ancestor = findByName(it)
		}
	}

	/**
	 * Replace Entity's attributes by the new ones.
	 */
	fun attributes(id: String, vararg attributes: Attribute) {
		find(id).let { entity ->
			entity.attributes.forEach {
				it.delete()
			}
			for (attribute in attributes) {
				EntityAttribute.new {
					this.entity = entity
					this.name = attribute.first
					this.value = attribute.second
				}
			}
		}
	}

	fun attributes(id: EntityUUID, vararg attributes: Attribute) = attributes(id.toString(), *attributes)

	fun findByName(name: String) = entity.find { table.name eq name }.firstOrNull()
}
