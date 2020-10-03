package derivean.game.mutator.element.water

import derivean.game.attribute.element.fireElement
import derivean.game.attribute.element.waterElement
import derivean.game.entity.Entities
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutation
import derivean.game.mutator.Mutator

/**
 * Adjust attributes for a Water Element - for example weakness or strength.
 */
class WaterElementMutator : AbstractMutator() {
	override fun mutation(mutator: Mutator, targets: Entities) = Mutation.build(mutator, targets) {
		mutation {
			mutator.attributes(
				/**
				 * Water Element has full power of... water :)
				 */
				1.0.waterElement(),
				/**
				 * Water Element is absolutely weak to fire. Ooouch.
				 */
				(-1.0).fireElement(),
			)
		}
	}
}
