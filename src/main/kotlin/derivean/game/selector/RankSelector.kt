package derivean.game.selector

import derivean.game.entity.Entity
import derivean.game.formation.Formations
import derivean.game.mutator.Targets

/**
 * Basic selector based on Mutator rank.
 */
class RankSelector : AbstractSelector() {
	override fun select(entity: Entity, formations: Formations) = Targets.build {

	}
}
