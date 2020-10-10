package derivean.game.initiative

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.formation.Formation
import derivean.game.formation.Formations

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
	fun resolve(entities: Entities): Entity

	fun onInitiative(entity: Entity)

	fun onInitiatives(formations: Formations)

	/**
	 * Shortcut method for resolving member from Formations.
	 */
	fun initiative(formations: Formations, onEntity: (Entity) -> Unit = {}) = try {
		resolve(resolve(formations)).also { onInitiative(it) }.also(onEntity)
	} catch (e: NoInitiativeException) {
		onInitiatives(formations)
		resolve(resolve(formations)).also { onInitiative(it) }.also(onEntity)
	}
}
