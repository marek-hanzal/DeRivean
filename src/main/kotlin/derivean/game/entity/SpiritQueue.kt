package derivean.game.entity

class SpiritQueue(private val spirits: Spirits) {
	private var current: Spirits = Spirits()

	fun reset() {
		current = spirits.copy()
	}

	fun getSpirit(): Spirit {
		if (current.isEmpty()) {
			throw EntityException("Spirit Queue is empty; cannot get a Spirit!")
		}
		return current.spirits().maxBy { it.entity.initiative }!!.also {
			current.remove(it)
		}
	}

	fun isEmpty() = current.isEmpty()

	fun count() = current.count()
}
