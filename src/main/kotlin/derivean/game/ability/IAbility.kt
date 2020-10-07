package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.formation.Member

interface IAbility {
	/**
	 * Use the given ability on a list of targets.
	 */
	fun use(entity: Entity, targets: List<Entity>)

	/**
	 * Compute rank of this ability (for selectors).
	 */
	fun rank(entity: Member, target: Member): Double
}
