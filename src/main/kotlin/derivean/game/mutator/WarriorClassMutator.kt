package derivean.game.mutator

import derivean.game.attribute.common.classMage
import derivean.game.attribute.common.classWarrior
import derivean.game.effect.Effects
import derivean.game.entity.Entity

class WarriorClassMutator(effects: Effects) : AbstractMutator(effects) {
	override fun mutate(entity: Entity) {
		entity.attributes.set(
			1.0.classWarrior(),
			(-1.0).classMage(),
		)
	}
}
