package derivean.game.ability.physical

import derivean.game.ability.AbstractAbility
import derivean.game.ability.Target
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.formation.Formations
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

	override fun targets(entity: Entity, formations: Formations) = mutableListOf<Target>().apply {

	}

	private fun damage(entity: Entity, target: Entity) = max(attributes(entity).strength() - target.physicalDefense(), 0.0)

	companion object {
		const val ABILITY = "ability.physical.BareHandAttack"

		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()

		private const val ATTRIBUTE_TARGETS = "ability.physical.BareHandAttack.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to value
		fun targets(attributes: Attributes) = attributes[ATTRIBUTE_TARGETS]
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

fun Double.bareHandTargets() = BareHandAttack.targets(this)
fun Attributes.bareHandTargets() = BareHandAttack.targets(this)
