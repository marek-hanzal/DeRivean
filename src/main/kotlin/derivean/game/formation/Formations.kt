package derivean.game.formation

import derivean.game.entity.Entity

/**
 * Contains all formations in an Environment (like in a Battle, a Pub or Whatever...).
 */
class Formations(val map: Map<String, Formation>) : Iterable<Map.Entry<String, Formation>> {
	override fun iterator() = map.iterator()

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownFormationException("Requested unknown formation [${name}].") }

	fun formations() = map.values.iterator()

	fun entities(block: (Entity) -> Unit) {
		for (formation in map.values) {
			for (entity in formation) {
				block(entity)
			}
		}
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val map = mutableMapOf<String, Formation>()

		fun formation(vararg formation: Pair<String, Formation>) = map.putAll(formation)

		fun formation(name: String, formation: Formation.Builder.() -> Unit) = formation(name to Formation.build(name, formation))

		fun build() = Formations(
			map,
		)
	}
}
