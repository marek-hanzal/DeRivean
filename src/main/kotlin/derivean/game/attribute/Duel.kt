package derivean.game.attribute

/**
 * Result of the Effect - source and also target entity (attributes) could be affected,
 * for example target entity could have counter attack ability.
 */
data class Duel(val source: Attributes, val target: Attributes) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var source = Attributes()
		private var target = Attributes()

		fun source(vararg values: Value) = values.forEach { value -> source += value }
		fun source(block: Attributes.() -> Unit) = block(source)

		fun target(vararg values: Value) = values.forEach { value -> target += value }
		fun target(block: Attributes.() -> Unit) = block(target)

		fun build() = Duel(source, target)
	}
}
