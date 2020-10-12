package derivean.server.upgrade

import derivean.game.attribute.Attribute
import derivean.game.attribute.common.health
import derivean.game.attribute.common.mana
import derivean.game.attribute.common.maxHealth
import derivean.game.attribute.common.maxMana
import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.entity.Entity
import derivean.server.entity.EntityAttribute
import derivean.server.player.Player

class u2020_10_12(container: IContainer) : AbstractUpgrade(container) {
	fun attribute(entity: Entity, vararg attributes: Attribute) {
		for (attribute in attributes) {
			EntityAttribute.new {
				this.entity = entity
				this.name = attribute.first
				this.value = attribute.second
			}
		}
	}

	override fun upgrade() {
		storage.transaction {
			Player.new {
				name = "The God"
			}.also { player ->
				Entity.new {
					this.player = player
					this.name = "Gwork, The First Human"
				}.also { entity ->
					attribute(
						entity,
						100.0.health(),
						100.0.maxHealth(),
						25.0.mana(),
						25.0.maxMana(),
					)
				}
			}
		}
	}
}
