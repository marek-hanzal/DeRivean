package derivean.game.mutator

import derivean.game.entity.Entities

abstract class AbstractMutator : IMutator {
	override fun targets(mutator: Mutator, entities: Entities) = Targets.build {
		for (entity in entities) {
			target(mutator, entity).apply {
				if (rank > 0) {
					target(this)
				}
			}
		}
	}
}
