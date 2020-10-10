package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.formation.Formations
import derivean.game.selector.Targets
import derivean.game.timeline.ITimeline

interface IAbility {
	/**
	 * Name of this ability (for internal game use).
	 */
	val ability: String

	/**
	 * Use the given ability on a target.
	 */
	fun use(entity: Entity, target: Entity, timeline: ITimeline)

	/**
	 * Compute rank of this ability (for selectors).
	 */
	fun targets(entity: Entity, formations: Formations): Targets
}
