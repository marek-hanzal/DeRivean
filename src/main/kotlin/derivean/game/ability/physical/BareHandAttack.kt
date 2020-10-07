package derivean.game.ability.physical

import derivean.game.ability.AbstractAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import kotlin.math.max

class BareHandAttack(ability: String, attributes: Attributes) : AbstractAbility(ability, attributes) {
	override fun use(entity: Entity, targets: List<Entity>) {
		for (target in targets) {
			damage(entity, target).apply {
				/**
				 * Accumulate overall entity's damage and physical damage done.
				 */
				entity.inc(damage())
				entity.inc(physicalDamage())
				/**
				 * Convert damage to heal loss of target entity; health cannot go under zero.
				 */
				target.decOrZero(health())
			}
		}
	}

	override fun rank(entity: Entity, target: Entity, relation: Double): Double {
		if (!target.isAlive()) {
			return 0.0
		}
		return damage(entity, target) * relation
	}

	private fun damage(entity: Entity, target: Entity) = max(attributes(entity).strength() - target.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.BareHandAttack"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val attributes = Attributes()

		fun attributes(vararg attribute: Attribute) = attributes.set(*attribute)

		fun build() = BareHandAttack(
			ABILITY,
			attributes,
		)
	}
}
