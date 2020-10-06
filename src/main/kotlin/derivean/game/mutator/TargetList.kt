package derivean.game.mutator

class TargetList(val targets: MutableList<Targets> = mutableListOf()) {
	fun targets() = targets.maxByOrNull { it.rank }

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val list = mutableListOf<Targets>()

		fun targets(targets: Targets) {
			list.add(targets)
		}

		fun build() = TargetList(
			list
		)
	}
}
