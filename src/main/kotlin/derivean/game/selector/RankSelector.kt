package derivean.game.selector

import derivean.game.entity.Entity
import derivean.game.formation.Formations

/**
 * Basic selector based on Mutator rank.
 */
class RankSelector : AbstractSelector() {
	override fun select(entity: Entity, formations: Formations) = mutableListOf<Targets>().let { list ->
		for (ability in entity.abilities) {
			list.add(ability.targets(entity, formations))
		}
		list.filter { it.rank > 0 }.maxByOrNull { it.rank }
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = RankSelector(
		)
	}
}
