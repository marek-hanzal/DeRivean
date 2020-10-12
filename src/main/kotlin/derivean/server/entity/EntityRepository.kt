package derivean.server.entity

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.repository.UnknownEntityException
import derivean.server.player.Player
import java.util.*

class EntityRepository(container: IContainer) : AbstractRepository<Entity>(EntityTable, container) {
	fun create(player: Player, ancestor: String?, block: Entity.() -> Unit) = Entity.new {
		this.player = player
		block(this)
		ancestor?.let {
			this.ancestor = findByName(it)
		}
	}

	/**
	 * Replace Entity's attributes by the new ones.
	 */
	fun attributes(entity: Entity, vararg attributes: Attribute) {
		EntityAttribute.find { EntityAttributeTable.entity eq entity.id }.forEach {
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

	fun findByName(name: String) = Entity.find { EntityTable.name eq name }.firstOrNull()

	override fun find(uuid: UUID) = Entity.findById(uuid) ?: throw UnknownEntityException("Requested an unknown Entity [${uuid}].")
}
