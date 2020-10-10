package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

class Controller : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.initiative(formations) { entity ->
			entity.select(formations) { targets ->
				targets.resolve()
			}
		}
	}
}
