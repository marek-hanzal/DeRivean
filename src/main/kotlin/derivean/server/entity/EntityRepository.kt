package derivean.server.entity

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.EntityUUID
import derivean.server.player.Player
import derivean.server.upgrade.u2020_10_17

typealias EntityTable = u2020_10_17.uEntityTable
typealias Entity = u2020_10_17.uEntity

class EntityRepository(container: IContainer) : AbstractRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	fun create(player: Player, ancestor: String?, block: Entity.() -> Unit) = entity.new {
		this.player = player
		block(this)
		ancestor?.let {
			this.ancestor = findByName(it)
		}
	}

	/**
	 * Replace Entity's attributes by the new ones.
	 */
	fun attributes(id: EntityUUID, vararg attributes: Attribute) {
		find(id.value).let { entity ->
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

	fun findByName(name: String) = entity.find { table.name eq name }.firstOrNull()
}
