package derivean.game.attribute

/**
 * Result of the Effect - source and also target entity (attributes) could be affected,
 * for example target entity could have counter attack ability.
 */
data class Duel(val source: Attributes, val target: Attributes) {
	operator fun plusAssign(it: Duel) {
		source += it.source
		target += it.target
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var source = Attributes()
		private var target = Attributes()

		fun source(vararg pairs: Pair<String, Double>) = pairs.forEach { source += it }

		fun source(attributes: Attributes) {
			source = attributes
		}

		fun target(vararg pairs: Pair<String, Double>) = pairs.forEach { target += it }

		fun target(attributes: Attributes) {
			target = attributes
		}

		fun build() = Duel(source, target)
	}
}
