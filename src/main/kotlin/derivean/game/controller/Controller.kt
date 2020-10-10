package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.selector.RankSelector

class Controller : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.initiative(formations).let { entity ->
			RankSelector().select(entity, formations)
		}
	}
}
