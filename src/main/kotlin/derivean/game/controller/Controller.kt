package derivean.game.controller

import derivean.game.attribute.common.currentInitiative
import derivean.game.attribute.common.roundInitiative
import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

class Controller : AbstractController() {
	override fun loop(initiative: IInitiative, formations: Formations) {
		initiative.initiative(formations, { entity ->
			entity.attributes.set(0.0.currentInitiative())
		}, {
			it.entities { entity, _ ->
				entity.attributes.set(currentInitiative() to roundInitiative())
			}
		}) { entity ->
			entity.select(formations) { targets ->
				targets.resolve()
			}
		}
	}
}
