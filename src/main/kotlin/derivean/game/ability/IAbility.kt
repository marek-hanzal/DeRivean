package derivean.game.ability

import derivean.game.entity.Entity

interface IAbility {
	/**
	 * Ability name.
	 */
	val ability: String

	fun use(entity: Entity, targets: List<Entity> = listOf())
}
