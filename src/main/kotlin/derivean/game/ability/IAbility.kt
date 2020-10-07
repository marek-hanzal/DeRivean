package derivean.game.ability

import derivean.game.entity.Entity

interface IAbility {
	val ability: String

	/**
	 * Use the given ability on a list of targets.
	 */
	fun use(entity: Entity, targets: List<Entity>)

	fun use(entity: Entity, target: Entity) = use(entity, listOf(target))

	/**
	 * Compute rank of this ability (for selectors).
	 */
	fun rank(entity: Entity, target: Entity): Double
}
