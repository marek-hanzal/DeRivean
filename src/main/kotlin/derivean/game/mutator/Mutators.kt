package derivean.game.mutator

class Mutators(val map: Map<String, IMutator>) : Iterable<Map.Entry<String, IMutator>> {
	operator fun get(name: String) = map.getOrElse(name) { throw UnknownMutatorException("Requested unknown mutator [${name}].") }

	override fun iterator() = map.iterator()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val map = mutableMapOf<String, IMutator>()

		fun mutator(vararg mutator: Pair<String, IMutator>) = map.putAll(mutator)

		fun build() = Mutators(
			map,
		)
	}
}
