package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.ability.Ability
import derivean.game.attribute.Attributes
import derivean.game.attribute.Value

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val attributes: Attributes, val abilities: Abilities) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val attributes = Attributes()
		private val abilities = Abilities()

		fun attributes(vararg values: Value) = values.forEach { value -> attributes += value }

		fun abilities(vararg abilities: Ability) {

		}

		fun build() = Entity(
			attributes,
			abilities,
		)
	}
}
