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
	 * Use the given ability on a list of targets.
	 */
	fun use(entity: Entity, targets: List<Entity>, timeline: ITimeline)

	fun use(entity: Entity, target: Entity, timeline: ITimeline) = use(entity, listOf(target), timeline)

	/**
	 * Compute rank of this ability (for selectors).
	 */
	fun targets(entity: Entity, formations: Formations): Targets
}
