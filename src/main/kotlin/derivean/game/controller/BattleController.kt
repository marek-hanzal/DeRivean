package derivean.game.controller

import derivean.game.entity.EntitiesMap
import derivean.game.initiative.IInitiative
import derivean.game.mutator.Targets

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun loop(initiative: IInitiative, entitiesMap: EntitiesMap) {
		val entity = initiative.resolve(entitiesMap)

		val targetList = mutableListOf<Targets>()

		for (ability in entity.abilities) {
			for (entities in entitiesMap) {
				targetList.add(ability.targets(entity, entities))
			}
		}

		targetList.maxByOrNull { it.rank }?.let {
		}

		TODO("Not yet implemented")
	}
}
