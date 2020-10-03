package derivean.game.controller

import derivean.game.entity.ListOfEntities
import derivean.game.initiative.IInitiative

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun loop(initiative: IInitiative, listOfEntities: ListOfEntities) {
		val entity = initiative.resolve(listOfEntities)

		for (ability in entity.abilities) {
		}

		TODO("Not yet implemented")
	}
}
