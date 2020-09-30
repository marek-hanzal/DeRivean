package derivean.game.mutator.`class`

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.equipment.Equipment
import derivean.game.mutator.AbstractMutator

class WarriorClassMutator : AbstractMutator() {
	override fun mutate(entity: Entity, vararg targets: Entity) {
		entity.attributes(
			1.0.classWarrior(),
		)
		entity.equip(
			Equipment("Quite Old Rusty Sword", Attributes(
				15.0.strength(),
			)) to "hands"
		)
	}
}
