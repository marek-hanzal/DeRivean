package derivean.game.entity

/**
 * An Entity is a general attribute holder; it could be an Hero or a Weapon, Item, whatever.
 * Or it could also be a result of some Effect.
 */
data class Entity(val attributes: Attributes) {
	operator fun plusAssign(plus: Entity) {
		attributes += plus.attributes
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		val attributes = Attributes()

		fun attribute(name: String, value: Double) = attributes.set(name, value)

		fun attribute(name: String, value: Int) = attributes.set(name, value.toDouble())

		fun build() = Entity(
			attributes
		)
	}
}
