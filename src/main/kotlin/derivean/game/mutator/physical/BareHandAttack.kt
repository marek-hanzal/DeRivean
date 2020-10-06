package derivean.game.mutator.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutation
import derivean.game.mutator.Mutator
import derivean.game.mutator.Target
import kotlin.math.ceil
import kotlin.math.max

class BareHandAttack : AbstractMutator() {
	override fun mutation(mutator: Mutator, targets: Entities) = Mutation.build(mutator, targets) {
		mutation {
			for (target in targets) {
				damage(mutator, target) {
					/**
					 * Accumulate overall entity's damage and physical damage done.
					 */
					mutator.entity.inc(damage())
					mutator.entity.inc(physicalDamage())
					/**
					 * Convert damage to heal loss of target entity; health cannot go under zero.
					 */
					target.decOrZero(health())
				}
			}
		}
	}

	override fun target(mutator: Mutator, entity: Entity) = Target.build(entity) {
		damage(mutator, entity) {
			rank = this
		}
	}

	override fun targets(mutator: Mutator) = mutator.current.bareHandTargets()

	private fun damage(mutator: Mutator, target: Entity, block: Double.() -> Unit) = block(max(mutator.current.strength() - target.physicalDefense(), 0.0))

	companion object {
		fun ability(name: String, attributes: Attributes = Attributes()) = Ability(name, BareHandAttack(), attributes)

		private const val ATTRIBUTE_TARGETS = "physical.bare-hand.targets"
		fun targets(value: Double) = ATTRIBUTE_TARGETS to ceil(value)
		fun targets(attributes: Attributes) = attributes[ATTRIBUTE_TARGETS]
	}
}

fun Double.bareHandTargets() = BareHandAttack.targets(this)
fun Attributes.bareHandTargets() = BareHandAttack.targets(this)
