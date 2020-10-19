package derivean.server.entity

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.storage.EntityUUID
import derivean.server.player.PlayerRepository
import derivean.server.upgrade.u2020_10_17

typealias EntityTable = u2020_10_17.uEntityTable
typealias Entity = u2020_10_17.uEntity

class EntityRepository(container: IContainer) : AbstractRepository<Entity, EntityTable>(Entity, EntityTable, container) {
	private val playerRepository: PlayerRepository by container.lazy()

	fun create(player: String, ancestor: String?, block: Entity.() -> Unit) = create {
		this.player = playerRepository.find(player)
		block(this)
		ancestor?.let {
			this.ancestor = findByName(it)
		}
	}

	fun create(player: EntityUUID, ancestor: String?, block: Entity.() -> Unit) = create(player.toString(), ancestor, block)

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
