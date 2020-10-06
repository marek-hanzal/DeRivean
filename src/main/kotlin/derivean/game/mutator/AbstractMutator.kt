package derivean.game.mutator

import derivean.game.attribute.common.isAlive
import derivean.game.entity.Entities

abstract class AbstractMutator : IMutator {
	override fun targets(mutator: Mutator, entities: Entities) = Targets.build(mutator, this, targets(mutator)) {
		for (entity in entities) {
			target(mutator, entity).apply {
				/**
				 * Basic common rules:
				 * - Entity must be alive to be a target
				 * - Rank must be more than 0; this could be used when source entity (mutator) does not have mana for casting spells
				 * - No friendly fire; in support Mutators this behavior should be overridden
				 */
				if (entity.isAlive() && rank > 0 && !entities.isMember(mutator.entity)) {
					target(this)
				}
			}
		}
	}
}
