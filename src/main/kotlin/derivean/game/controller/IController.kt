package derivean.game.controller

import derivean.game.entity.Entities

interface IController {
	/**
	 * Compute one round of "something" (usually battle) between two teams of Entities.
	 *
	 * In general alfa and beta are enemies.
	 */
	fun round(alfa: Entities, beta: Entities)
}
