package derivean.game.entity

class EntitiesMap(private val map: MutableMap<String, Entities> = mutableMapOf()) : Iterable<Entities> {
	operator fun set(name: String, entities: Entities) {
		map[name] = entities
	}

	operator fun get(name: String) = map.getOrElse(name) { throw EntityException("Requested unknown list of Entities [${name}].") }

	override fun iterator() = map.values.iterator()
}
