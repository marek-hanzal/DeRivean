package derivean.game.mutator.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.*
import derivean.game.mutator.Target
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

	override fun target(mutator: Mutator, entity: Entity) = Target.build {
		damage(mutator, entity) {
			rank = this
		}
	}

	override fun targets(mutator: Mutator, entities: Entities) = Targets.build {
		for (entity in entities) {
			target(mutator, entity)
		}
	}

	private fun damage(mutator: Mutator, target: Entity, block: Double.() -> Unit) = block(max(mutator.attributes().strength() - target.physicalDefense(), 0.0))

	companion object {
		fun ability(name: String, attributes: Attributes = Attributes()) = Ability(name, BareHandAttack(), attributes)
	}
}
