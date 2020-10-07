package derivean.game.selector

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.formation.Formations

/**
 * Basic selector based on Mutator rank.
 */
class RankSelector : AbstractSelector() {
	override fun select(entity: Entity, formations: Formations) = Entities.build {
		val list = mutableListOf<Pair<Double, Entity>>()
		for (ability in entity.abilities) {
			for (formation in formations.formations()) {
				for (target in formation) {
				}
			}
		}
		entity(list.filter { it.first > 0 }.sortedByDescending { it.first }.take(1).map { it.second })
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = RankSelector(
		)
	}
}
