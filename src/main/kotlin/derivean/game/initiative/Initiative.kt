package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap

class Initiative : AbstractInitiative() {
	override fun resolve(entitiesMap: EntitiesMap) = Entities.build {
		for (value in entitiesMap.filter { it.entities.isNotEmpty() }) {
			entities(resolve(value))
		}
	}.let {
		resolve(it)
	}

	override fun resolve(entities: Entities) = entities.entities.maxByOrNull {
		it.value.initiative()
	}?.value ?: throw NoInitiativeException("Entities are empty, cannot resolve initiative.")
}
