package derivean.game.attribute

import kotlin.math.max

/**
 * Low-level class holding all attributes used in computing across the game.
 */
class Attributes(private val map: MutableMap<String, Double> = mutableMapOf()) : Iterable<Map.Entry<String, Double>> {
	override fun iterator() = map.iterator()

	/**
	 * Variable set of attributes.
	 */
	fun set(vararg attributes: Attribute) {
		for ((k, v) in attributes) {
			map[k] = v
		}
	}

	/**
	 * Override current attributes by ones from attributes.
	 */
	fun set(attributes: Attributes) = map.putAll(attributes.map)

	/**
	 * Return a value of an attribute or a default value.
	 */
	operator fun get(name: String, default: Double = 0.0) = map.getOrDefault(name, default)

	/**
	 * Increase an attribute by the given one.
	 */
	fun inc(attribute: Attribute) {
		map[attribute.first] = get(attribute.first) + attribute.second
	}

	/**
	 * Increase all attributes from incoming attributes.
	 */
	fun incBy(attributes: Attributes) {
		for ((k, v) in attributes) {
			map[k] = get(k) + v
		}
	}

	/**
	 * Decrease a given attribute or leave zero.
	 */
	fun decOrZero(attribute: Attribute) {
		map[attribute.first] = max(0.0, get(attribute.first) - attribute.second)
	}

	/**
	 * Multiply given attribute; default sets default behavior (should keep zero or 1.0 * attribute).
	 */
	fun multiply(attribute: Attribute, default: Double = 0.0) {
		map[attribute.first] = get(attribute.first, default) * attribute.second
	}

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
				it.incBy(attr)
			}
		}

		fun from(vararg attributes: Attribute) = Attributes().also {
			it.set(*attributes)
		}
	}
}
