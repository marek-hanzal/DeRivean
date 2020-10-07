package derivean.game.selector

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.formation.Formations

/**
 * Basic selector based on Mutator rank.
 */
class RankSelector : AbstractSelector() {
	override fun select(entity: Entity, formations: Formations) = Entities.build {
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = RankSelector(
		)
	}
}
