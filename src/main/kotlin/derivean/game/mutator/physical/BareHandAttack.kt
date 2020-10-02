package derivean.game.mutator.physical

import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.AbstractMutator
import kotlin.math.max

class BareHandAttack : AbstractMutator() {
	override fun mutate(entity: Entity, targets: List<Entity>) {
		for (target in targets) {
			val damage = max(entity.strength() - target.physicalDefense(), 0.0)
			/**
			 * Accumulate overall entity's damage and physical damage done.
			 */
			entity.damage(entity.damage() + damage)
			entity.physicalDamage(entity.physicalDamage() + damage)
			/**
			 * Convert damage to heal loss of target entity; health cannot go under zer0.
			 */
			target.health(max(target.health() - damage, 0.0))
		}
	}
}
