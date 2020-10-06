package derivean.game.controller

import derivean.game.entity.EntitiesMap
import derivean.game.initiative.IInitiative
import derivean.game.mutator.TargetsList

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun loop(initiative: IInitiative, entitiesMap: EntitiesMap) {
		val entity = initiative.resolve(entitiesMap)

		TargetsList.build {
			for (ability in entity.abilities) {
				for (entities in entitiesMap) {
					addTargets(ability.targets(entity, entities))
				}
			}
		}.getTargets()?.evaluate()
	}
}
