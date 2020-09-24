package derivean.game.mutator.element

import derivean.game.attribute.Attributes
import derivean.game.attribute.fireElement
import derivean.game.attribute.waterElement
import derivean.game.mutator.AbstractMutator
import derivean.game.operator.Operators
import derivean.game.operator.set

class WaterElementMutator : AbstractMutator() {
	override fun mutate(attributes: Attributes): Operators = Operators(
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
