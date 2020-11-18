package derivean.game.attribute

import kotlin.math.max

/**
 * Low-level class holding all attributes used in computing across the game.
 */
class Attributes : LinkedHashMap<String, Double>() {
	fun set(attributes: Iterable<Attribute>) = putAll(attributes)

	fun set(vararg attribute: Attribute) = putAll(attribute)

	/**
	 * Override current attributes by ones from attributes.
	 */
	fun set(attributes: Attributes) = putAll(attributes)

	fun set(pair: Pair<String, String>) {
		this[pair.first] = this[pair.second, 0.0]
	}

	/**
	 * Return a value of an attribute or a default value.
	 */
	operator fun get(name: String, default: Double = 0.0) = getOrDefault(name, default)

	/**
	 * Increase an attribute by the given one.
	 */
	fun inc(attribute: Attribute) {
		this[attribute.first] = this[attribute.first, 0.0] + attribute.second
	}

	fun inc(vararg attributes: Attribute) = inc(listOf(*attributes))

	fun inc(attributes: Iterable<Attribute>) {
		for (attribute in attributes) {
			inc(attribute)
		}
	}

	/**
	 * Increase all attributes from incoming attributes.
	 */
	fun incBy(attributes: Attributes) {
		for ((k, v) in attributes) {
			this[k] = this[k, 0.0] + v
		}
	}

	/**
	 * Decrease a given attribute or leave zero.
	 */
	fun decOrZero(attribute: Attribute) {
		this[attribute.first] = max(0.0, this[attribute.first, 0.0] - attribute.second)
	}

	/**
	 * Multiply given attribute; default sets default behavior (should keep zero or 1.0 * attribute).
	 */
	fun multiply(attribute: Attribute, default: Double = 0.0) {
		this[attribute.first] = this[attribute.first, default] * attribute.second
	}

	companion object {
		fun from(vararg attributes: Attributes) = Attributes().also {
			for (attr in attributes) {
				it.incBy(attr)
			}
		}

		fun from(vararg attributes: Attribute) = Attributes().also {
			it.set(*attributes)
		}

		fun from(attributes: Iterable<Attribute>) = Attributes().apply { set(attributes) }
	}
}
