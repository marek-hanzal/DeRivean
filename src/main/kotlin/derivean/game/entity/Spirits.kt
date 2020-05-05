package derivean.game.entity

open class Spirits(vararg spirits: Spirit) {
	private val spirits: MutableMap<Spirit, Spirit> = mutableMapOf()

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

	fun copy(): Spirits = Spirits(*spirits().toTypedArray())

	fun isEmpty() = spirits.isEmpty()

	fun count() = spirits.count()

	/**
	 * Return list of all known spirits
	 */
	fun spirits() = spirits.values.toList()
}
