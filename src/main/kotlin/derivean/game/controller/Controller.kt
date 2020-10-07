package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

class Controller : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.initiative(formations).let { entity ->
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
