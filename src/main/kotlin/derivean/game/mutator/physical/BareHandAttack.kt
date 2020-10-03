package derivean.game.mutator.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator
import derivean.game.mutator.Target
import kotlin.math.max

class BareHandAttack : AbstractMutator() {
	override fun evaluate(mutator: Mutator, targets: List<Entity>) {
		val attributes = mutator.attributes()

		for (target in targets) {
			val damage = max(attributes.strength() - target.physicalDefense(), 0.0)
			/**
			 * Accumulate overall entity's damage and physical damage done.
			 */
			mutator.entity.inc(damage.damage())
			mutator.entity.inc(damage.physicalDamage())
			/**
			 * Convert damage to heal loss of target entity; health cannot go under zero.
			 */
			target.decOrZero(damage.health())
		}
	}

	override fun target(entity: Entity, target: Entity) = Target.build(entity, target) {
	}

	companion object {
		fun ability(name: String, attributes: Attributes = Attributes()) = Ability(name, BareHandAttack(), attributes)
	}
}
