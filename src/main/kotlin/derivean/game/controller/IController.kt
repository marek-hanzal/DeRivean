package derivean.game.controller

import derivean.game.entity.Entities
import derivean.game.initiative.IInitiative

interface IController {
	/**
	 * Compute one round of actions. Each group of Entities is considered as
	 * standalone team, thus if there is battle controller, they will be attacking
	 * each other.
	 */
	fun round(initiative: IInitiative, entities: List<Entities>)
}
