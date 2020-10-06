package derivean.game.attribute

import kotlin.math.max

/**
 * Low-level class holding all attributes used in computing across the game.
 */
class Attributes(vararg values: Attribute) {
	private var map = mutableMapOf<String, Double>()

	init {
		map.putAll(values)
	}

	operator fun plusAssign(attributes: Attributes) {
		attributes.forEach { (k, v) ->
			map.merge(k, v, fun(t, u): Double? {
				return t + u
			})
		}
	}

	operator fun plusAssign(attribute: Attribute) = set(attribute.first, attribute.second)

	private fun forEach(action: (Map.Entry<String, Double>) -> Unit) = map.forEach(action)

	fun set(key: String, value: Double) = map.set(key, value)

	fun set(vararg attributes: Attribute) {
		for (value in attributes) {
			set(value.first, value.second)
		}
	}

	fun set(attributes: Attributes) = map.putAll(attributes.map)

	operator fun get(name: String, default: Double = 0.0) = map.getOrDefault(name, default)

	fun inc(attribute: Attribute) {
		map[attribute.first] = get(attribute.first) + attribute.second
	}

	fun dec(attribute: Attribute) = inc(Attribute(attribute.first, -attribute.second))

	fun decOrZero(attribute: Attribute) = set(attribute.first, max(0.0, get(attribute.first) - attribute.second))

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

	companion object {
		fun from(vararg attributes: Attributes) = Attributes().also {
			for (attr in attributes) {
				it += attr
			}
		}
	}
}
