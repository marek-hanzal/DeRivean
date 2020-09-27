package derivean.game.effect

class Effects(vararg effects: IEffect) {
	private val map = mutableMapOf<String, IEffect>()

	init {
		for (k in effects) {
			map[k.effect] = k
		}
	}

	operator fun get(name: String) = map.getOrElse(name) { throw UnknownEffectException("Requested unknown ability [${name}].") }
}
