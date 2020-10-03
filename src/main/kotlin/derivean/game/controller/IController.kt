package derivean.game.controller

import derivean.game.entity.ListOfEntities
import derivean.game.initiative.IInitiative

interface IController {
	/**
	 * Compute one round of actions. Each group of Entities is considered as
	 * standalone team, thus if there is battle controller, they will be attacking
	 * each other.
	 */
	fun loop(initiative: IInitiative, listOfEntities: ListOfEntities)
}
