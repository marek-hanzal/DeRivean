package derivean.game.initiative

import derivean.game.attribute.common.CommonAttributes
import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entity
import derivean.game.formation.Formations

abstract class AbstractInitiative : IInitiative {
	override fun onInitiative(entity: Entity) = entity.attributes.set(0.0.currentInitiative())

	override fun onInitiatives(formations: Formations) = formations.entities { entity, _ ->
		entity.attributes.set(CommonAttributes.CURRENT_INITIATIVE to CommonAttributes.ROUND_INITIATIVE)
	}
}
