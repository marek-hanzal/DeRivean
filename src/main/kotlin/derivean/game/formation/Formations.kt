package derivean.game.formation

/**
 * Contains all formations in an Environment (like in a Battle, a Pub or Whatever...).
 */
class Formations(val map: Map<String, Formation>) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val map = mutableMapOf<String, Formation>()

		fun formation(vararg formation: Pair<String, Formation>) = map.putAll(formation)

		fun formation(formation: Formation.Builder.() -> Unit) = Formation.build(formation)

		fun build() = Formations(
			map,
		)
	}
}
