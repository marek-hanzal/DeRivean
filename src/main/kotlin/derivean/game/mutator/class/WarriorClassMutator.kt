package derivean.game.mutator.`class`

import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.equipment.equipments.weapons.slotSword
import derivean.game.mutator.AbstractMutator

class WarriorClassMutator : AbstractMutator() {
	override fun mutate(entity: Entity, vararg targets: Entity) {
		entity.attributes(
			1.0.classWarrior(),
		)
		entity.slot(
			"hands".slotSword(
				15.0.strength(),
			)
		)
	}
}
