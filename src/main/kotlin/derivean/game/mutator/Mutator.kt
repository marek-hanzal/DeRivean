package derivean.game.mutator

import derivean.game.ability.IAbility
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.formation.Member

class Mutator(
	val member: Member,
	val attributes: Attributes,
	val current: Attributes = Attributes.from(member.entity.attributes, attributes)
) {
	fun attributes(vararg attributes: Attribute) = this.member.entity.attributes(*attributes)

	fun ability(ability: IAbility) = member.entity.abilities.ability(ability)
}
