package derivean.game.entity

open class Spirits(vararg spirits: Spirit) {
	private val spirits: MutableMap<Spirit, Spirit> = mutableMapOf()

	constructor(spirits: List<Spirit>) : this(*spirits.toTypedArray())

	init {
		add(*spirits)
	}

	fun add(vararg spirit: Spirit) {
		spirit.forEach {
			spirits[it] = it
		}
	}

	fun remove(spirit: Spirit) {
		spirits.remove(spirit)
	}

	fun copy() = Spirits(list())

	fun isEmpty() = spirits.isEmpty()

	fun count() = spirits.count()

	/**
	 * Return list of all known spirits
	 */
	fun list() = spirits.values.toList()
}
