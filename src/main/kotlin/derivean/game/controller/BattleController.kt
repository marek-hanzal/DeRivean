package derivean.game.controller

import derivean.game.entity.Entities
import derivean.game.initiative.IInitiative

/**
 * Battle controller is responsible for evaluating all the stuff related to
 * (automated) battle of two teams.
 *
 * Use case of this controller is when a player is just looking on (live) battle.
 */
class BattleController : AbstractController() {
	override fun round(initiative: IInitiative, entities: List<Entities>) {
		TODO("Not yet implemented")
	}
}
