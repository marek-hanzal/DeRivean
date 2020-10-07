package derivean.game.mutator.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator
import kotlin.math.ceil
import kotlin.math.max

class BareHandAttack : AbstractMutator() {
	override fun mutate(mutator: Mutator, targets: Entities) {
		for (target in targets) {
			damage(mutator, target) {
				/**
				 * Accumulate overall entity's damage and physical damage done.
				 */
				mutator.member.inc(damage())
				mutator.member.inc(physicalDamage())
				/**
				 * Convert damage to heal loss of target entity; health cannot go under zero.
				 */
				target.decOrZero(health())
				}
			}
		}
	}

	private fun damage(mutator: Mutator, target: Entity, block: Double.() -> Unit) = block(max(mutator.current.strength() - target.physicalDefense(), 0.0))

	companion object {
		fun ability(name: String, attributes: Attributes = Attributes()) = Ability(name, BareHandAttack(), attributes)

		private const val ATTRIBUTE_TARGETS = "physical.bare-hand.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to ceil(value)
		fun targets(attributes: Attributes, default: Double) = attributes[ATTRIBUTE_TARGETS, default]
	}
}

fun Double.bareHandTargets() = BareHandAttack.targets(this)
fun Attributes.bareHandTargets(default: Double = 1.0) = BareHandAttack.targets(this, default)
