package derivean.game.initiative

import derivean.game.entity.Entities
import derivean.game.entity.Entity

interface IInitiative {
	fun resolve(entities: List<Entities>): Entity

	fun resolve(entities: Entities): Entity = resolve(listOf(entities))
}
