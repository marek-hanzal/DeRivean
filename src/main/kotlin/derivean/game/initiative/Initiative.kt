package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.Entity

class Initiative : AbstractInitiative() {
	override fun resolve(entities: List<Entities>): Entity {
		TODO("Not yet implemented")
	}

	override fun resolve(entities: Entities): Entity = entities.entities.maxByOrNull {
		it.value.initiative()
	}?.value ?: throw NoInitiativeException(
		if (entities.entities.isEmpty()) {
			"Entities are empty, cannot resolve initiative."
		} else {
			"This is strange, but Initiative cannot resolve an Entity from non-empty Entities."
		}
	)
}
