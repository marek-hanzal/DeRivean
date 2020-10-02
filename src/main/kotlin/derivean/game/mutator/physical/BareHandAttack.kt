package derivean.game.mutator.physical

import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import derivean.game.mutator.Mutator
import kotlin.math.max

class BareHandAttack : AbstractMutator() {
	override fun mutate(mutator: Mutator, targets: List<Entity>) {
		val attributes = mutator.attributes()

		for (target in targets) {
			val damage = max(attributes.strength() - target.physicalDefense(), 0.0)
			/**
			 * Accumulate overall entity's damage and physical damage done.
			 */
			mutator.entity.inc(damage.damage())
			mutator.entity.inc(damage.physicalDamage())
			/**
			 * Convert damage to heal loss of target entity; health cannot go under zer0.
			 */
			target.decOrZero(damage.health())
		}
	}

	companion object {
		fun ability(name: String, attributes: Attributes = Attributes()) = Ability(name, BareHandAttack(), attributes)
	}
}
