package derivean.game.entity

import derivean.game.attribute.Attributes
import derivean.game.attribute.Value

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val attributes: Attributes) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val attributes = Attributes()

		fun attributes(vararg values: Value) = values.forEach { attributes += it }

		fun build() = Entity(
			attributes
		)
	}
}
