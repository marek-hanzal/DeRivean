package derivean.game.mutator

import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

class Mutator(val entity: Entity, val attributes: Attributes, val current: Attributes = Attributes.from(entity.attributes, attributes)) {
	fun attributes(vararg attributes: Attribute) = this.entity.attributes(*attributes)

	fun ability(ability: IAbility) = entity.abilities.ability(ability)
}
