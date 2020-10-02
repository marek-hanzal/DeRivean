package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.Ability
import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes
import derivean.game.mutator.IMutator

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
class Entity(
	val name: String,
	val attributes: Attributes,
	val abilities: Abilities = Abilities(),
) {
	override fun toString() = name

	fun attributes(vararg attributes: Attribute) = this.attributes.set(*attributes)

	fun ability(ability: Pair<String, IMutator>) {
		abilities.ability(Ability(ability.first, this, ability.second))
	}

	companion object {
		inline fun build(name: String, block: Builder.() -> Unit) = Builder(name).apply(block).build()
		fun build(name: String) = Builder(name).build()
	}

	class Builder(val name: String) {
		private var attributes = Attributes()
		private var abilities: MutableMap<String, IMutator> = mutableMapOf()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun abilities(vararg abilities: Pair<String, IMutator>) {
			this.abilities.putAll(abilities)
		}

		fun build() = Entity(
			name,
			attributes,
		)
	}
}
