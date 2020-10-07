package derivean.game.ability

import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

abstract class AbstractAbility(override val ability: String, val attributes: Attributes) : IAbility {
	fun attributes(entity: Entity) = Attributes.from(entity.attributes, attributes)
}
