package derivean.game.mutator.role

import derivean.game.attribute.common.classWarrior
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator

class WarriorClassMutator : AbstractMutator() {
	override fun mutate(mutator: Mutator, targets: List<Entity>) {
		val attributes = mutator.attributes()

		mutator.attributes(
			/**
			 * Take default health and increase it by a half.
			 */
			(attributes.health() * 1.5).health(),
			/**
			 * Take default Strength and increase it by 20%.
			 */
			(attributes.strength() * 1.2).strength(),
			1.0.classWarrior(),
		)
	}
}
