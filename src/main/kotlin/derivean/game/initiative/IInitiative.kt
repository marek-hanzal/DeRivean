package derivean.game.initiative

import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap
import derivean.game.entity.Entity

interface IInitiative {
	fun resolve(entitiesMap: EntitiesMap): Entity

	fun resolve(entities: Entities): Entity
}
