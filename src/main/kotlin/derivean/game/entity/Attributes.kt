package derivean.game.entity

/**
 * This is low-level class holding any kind of attributes an Entity could have.
 */
class Attributes(mapOf: AttributeType = mapOf()) {
	private var map = mutableMapOf<String, Double>()

	init {
		map.putAll(mapOf)
	}

	operator fun plusAssign(attributes: Attributes) {
		attributes.forEach { (k, v) ->
			map.merge(k, v, fun(t, u): Double? {
				return t + u
			})
		}
	}

	private fun forEach(action: (Map.Entry<String, Double>) -> Unit) = map.forEach(action)

	fun set(key: String, value: Double) = map.set(key, value)

	fun get(name: String) = map.getOrDefault(name, 0.0)

	fun inc(name: String, value: Double) {
		map[name] = get(name) + value
	}

	fun inc(name: String, value: Int) = inc(name, value.toDouble())

	fun dec(name: String, value: Double) = inc(name, -value)

	fun dec(name: String, value: Int) = dec(name, value.toDouble())

	override fun equals(other: Any?): Boolean {
		if (this === other) {
			return true
		}
		if (javaClass != other?.javaClass) {
			return false
		}

		other as Attributes

		if (map != other.map) {
			return false
		}

		return true
	}

	override fun hashCode() = map.hashCode()
}
