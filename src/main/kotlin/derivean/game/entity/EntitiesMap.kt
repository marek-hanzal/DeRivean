package derivean.game.entity

class EntitiesMap(private val map: Map<String, Entities>) : Iterable<Entities> {
	operator fun get(name: String) = map.getOrElse(name) { throw EntityException("Requested unknown list of Entities [${name}].") }

	override fun iterator() = map.values.iterator()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val map = mutableMapOf<String, Entities>()

		fun addEntities(name: String, entities: Entities) {
			map[name] = entities
		}

		fun addEntities(name: String, block: Entities.Builder.() -> Unit) {
			map[name] = Entities.build(block)
		}

		fun build() = EntitiesMap(
			map
		)
	}
}
