package derivean.game.entity

import derivean.game.attribute.Attributes

/**
 * An Entity is responsible for holding Attributes and equipping items.
 */
data class Entity(val attributes: Attributes) {
	operator fun plusAssign(plus: Entity) {
		attributes += plus.attributes
	}

	operator fun plusAssign(plus: Attributes) {
		attributes += plus
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val attributes = Attributes()

		fun attribute(name: String, value: Double) = attributes.set(name, value)

		fun attribute(name: String, value: Int) = attributes.set(name, value.toDouble())

		fun build() = Entity(
			attributes
		)
	}
}
