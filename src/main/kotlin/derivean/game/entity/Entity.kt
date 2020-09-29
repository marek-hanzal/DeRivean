package derivean.game.entity

import derivean.game.attribute.Attribute
import derivean.game.attribute.Attributes

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val attributes: Attributes) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var attributes = Attributes()

		fun attributes(vararg values: Attribute) {
			attributes = Attributes(*values)
		}

		fun build() = Entity(
			attributes,
		)
	}
}
