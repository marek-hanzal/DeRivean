package derivean.server.upgrade

import derivean.game.attribute.Attribute
import derivean.game.attribute.common.*
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
				/**
				 * Base Entity for all Human related Entities.
				 */
				Entity.new {
					this.player = player
					this.name = "Gwork, The First Human"
					attribute(
						this,
						100.0.health(),
						100.0.maxHealth(),
						25.0.mana(),
						25.0.maxMana(),
						10.0.strength(),
						5.0.physicalDefense(),
						10.0.roundInitiative(),
						1.0.haste(),
					)
				}.also { human ->
					/**
					 * Base Entity for all Warrior Class related Entities.
					 */
					Entity.new {
						this.player = player
						this.ancestor = human
						this.name = "Horwath, Greatest of Warriors"
						attribute(
							this,
							160.0.health(),
							160.0.maxHealth(),
							5.0.mana(),
							5.0.maxMana(),
							20.0.strength(),
							12.0.physicalDefense(),
							0.9.haste(),
							12.5.roundInitiative(),
							1.0.classWarrior(),
						)
					}
					/**
					 * Base Entity for all Mage Class related Entities.
					 */
					Entity.new {
						this.player = player
						this.ancestor = human
						this.name = "Moo, Greatest of Mages"
						attribute(
							this,
							70.0.health(),
							70.0.maxHealth(),
							100.0.mana(),
							100.0.maxMana(),
							0.75.haste(),
							10.0.roundInitiative(),
							1.0.classMage(),
						)
					}
				}
			}
		}
	}
}
