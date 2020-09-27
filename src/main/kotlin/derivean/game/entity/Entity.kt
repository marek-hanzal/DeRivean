package derivean.game.entity

import derivean.game.attribute.Attributes
import derivean.game.effect.IEffect

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val attributes: Attributes) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var attributes = Attributes()
//		private var abilities = Abilities()

		fun attributes(block: Attributes.Builder.() -> Unit) {
			attributes = Attributes.build(block)
		}

		fun abilities(vararg abilities: IEffect) {
		}

		fun build() = Entity(
			attributes,
		)
	}
}
