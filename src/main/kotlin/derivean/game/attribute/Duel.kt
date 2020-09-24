package derivean.game.attribute

/**
 * Result of the Effect - source and also target entity (attributes) could be affected,
 * for example target entity could have counter attack ability.
 */
data class Duel(val source: Attributes, val target: Attributes) {
	operator fun plusAssign(plus: Duel) {
		source += plus.source
		target += plus.target
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var source = Attributes()
		private var target = Attributes()

		fun source(vararg values: Value) = values.forEach { source += it }

		fun source(attributes: Attributes) {
			source = attributes
		}

		fun target(vararg values: Value) = values.forEach { target += it }

		fun target(attributes: Attributes) {
			target = attributes
		}

		fun build() = Duel(source, target)
	}
}
