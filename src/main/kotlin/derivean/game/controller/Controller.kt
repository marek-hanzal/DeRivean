package derivean.game.controller

import derivean.game.attribute.common.currentInitiative
import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

class Controller : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.initiative(formations).let { entity ->
			entity.attributes.set(0.0.currentInitiative())
			entity.select(formations) { targets ->
				targets.resolve()
			}
		}
	}
}
