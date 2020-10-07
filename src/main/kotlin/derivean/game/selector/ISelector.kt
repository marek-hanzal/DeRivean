package derivean.game.selector

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.formation.Formations

/**
 * Selector is responsible for selecting targets for the given Entity.
 */
interface ISelector {
	fun select(entity: Entity, formations: Formations): Entities
}
