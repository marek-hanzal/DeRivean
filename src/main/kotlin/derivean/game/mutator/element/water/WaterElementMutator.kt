package derivean.game.mutator.element.water

import derivean.game.attribute.element.fireElement
import derivean.game.attribute.element.waterElement
import derivean.game.effect.Effects
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator

/**
 * Adjust attributes for a Water Element - for example weakness or strength.
 */
class WaterElementMutator(effects: Effects) : AbstractMutator(effects) {
	override fun mutate(entity: Entity) {
		entity.attributes.set(
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
