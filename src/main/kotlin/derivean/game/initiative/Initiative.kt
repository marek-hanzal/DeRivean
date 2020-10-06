package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap

class Initiative : AbstractInitiative() {
	override fun resolve(entitiesMap: EntitiesMap) = Entities.build {
		for (entities in entitiesMap.filter { it.entities.isNotEmpty() }) {
			addEntity(resolve(entities))
		}
	}.let {
		resolve(it)
	}

	override fun resolve(entities: Entities) = entities.entities.filter { it.value.initiative() > 0 }.maxByOrNull {
		it.value.initiative()
	}?.value ?: throw NoInitiativeException(
		if (entities.entities.isEmpty()) {
			"Entities are Empty, cannot resolve initiative."
		} else {
			"Cannot resolve Initiative, all entities are without Initiative."
		}
	)
}
