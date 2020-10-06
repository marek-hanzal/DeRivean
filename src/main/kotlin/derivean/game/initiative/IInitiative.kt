package derivean.game.initiative

import derivean.game.formation.Formation
import derivean.game.formation.Formations
import derivean.game.formation.Member

/**
 * Initiative is responsible for computation, which team (Formation) and entity should
 * be the first to take an action.
 */
interface IInitiative {
	/**
	 * Resolve which team (thus Formation) will take current action.
	 *
	 * This method should not affect Formation's initiative.
	 */
	fun resolve(formations: Formations): Formation

	/**
	 * Resolve which Entity will take current action; this method
	 * **should** update Entity's initiative (usually set to zero) or
	 * it's possible it will take action next round again.
	 */
	fun resolve(formation: Formation): Member

	/**
	 * Shortcut method for resolving member from Formations.
	 */
	fun resolveMember(formations: Formations) = resolve(resolve(formations))
}
