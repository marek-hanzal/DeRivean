package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.resolveMember(formations).let { entity ->
			//
		}

//		TargetsList.build {
//			for (ability in entity.abilities) {
//				for (entities in formations) {
//					addTargets(ability.targets(entity, entities))
//				}
//			}
//		}.getTargets()?.evaluate()
	}
}
