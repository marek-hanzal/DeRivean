package derivean.game.initiative

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.entity.ListOfEntities

interface IInitiative {
	fun resolve(listOfEntities: ListOfEntities): Entity

	fun resolve(entities: Entities): Entity
}
