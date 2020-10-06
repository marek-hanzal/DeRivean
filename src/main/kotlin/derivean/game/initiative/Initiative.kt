package derivean.game.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap
import derivean.game.mutator.IMutator
import derivean.game.mutator.initiative.ResetMutator
import derivean.game.mutator.initiative.RoundMutator

class Initiative(reset: IMutator, round: IMutator) : AbstractInitiative(reset, round) {
	override fun resolve(entitiesMap: EntitiesMap) = Entities.build {
		for (entities in entitiesMap.filter { it.entities.isNotEmpty() }) {
			addEntity(resolve(entities))
		}
	}.let {
		resolve(it)
	}

	override fun resolve(entities: Entities) = entities.entities.filter { it.value.currentInitiative() > 0 }.maxByOrNull {
		it.value.currentInitiative()
	}?.value ?: throw NoInitiativeException(
		if (entities.entities.isEmpty()) {
			"Entities are Empty, cannot resolve initiative."
		} else {
			"Cannot resolve Initiative, all entities are without Initiative."
		}
	)

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var reset: IMutator = ResetMutator()
		var round: IMutator = RoundMutator()

		fun build() = Initiative(
			reset,
			round,
		)
	}
}
