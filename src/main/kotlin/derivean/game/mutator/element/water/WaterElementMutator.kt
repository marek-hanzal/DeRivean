package derivean.game.mutator.element.water

import derivean.game.attribute.Attributes
import derivean.game.attribute.element.fireElement
import derivean.game.attribute.element.waterElement
import derivean.game.mutator.AbstractMutator
import derivean.game.operator.Operators
import derivean.game.operator.operators.set

/**
 * Adjust attributes for a Water Element - for example weakness or strength.
 */
class WaterElementMutator : AbstractMutator() {
	override fun mutate(attributes: Attributes) = Operators(
		/**
		 * Water Element has full power of... water :)
		 */
		1.0.waterElement().set(),
		/**
		 * Water Element is absolutely weak to fire. Ooouch.
		 */
		(-1.0).fireElement().set(),
	)
}
