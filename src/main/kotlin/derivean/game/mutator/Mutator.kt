package derivean.game.mutator

import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.entity.Entity

class Mutator(val entity: Entity, val attributes: Attributes) {
	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	fun ability(ability: IAbility) {
		entity.abilities.ability(ability)
	}
}
