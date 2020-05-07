package derivean.game.entity

open class Spirits(vararg spirits: Spirit) {
	private val spirits: MutableMap<String, Spirit> = mutableMapOf()

	constructor(spirits: List<Spirit>) : this(*spirits.toTypedArray())

	init {
		add(*spirits)
	}

	fun get(name: String): Spirit = spirits[name] ?: throw UnknownSpiritException("Requested unknown Spirit [$name].")

	fun add(vararg spirit: Spirit) {
		spirit.forEach {
			spirits[it.name] = it
		}
	}

	fun remove(spirit: Spirit) {
		spirits.remove(spirit.name)
	}

	fun copy() = Spirits(list())

	fun isEmpty() = spirits.isEmpty()

	fun count() = spirits.count()

	/**
	 * Return list of all known spirits
	 */
	fun list() = spirits.values.toList()
}
