package derivean.game.mutator

class TargetsList(val targets: List<Targets>) {
	fun getTargets() = targets.maxByOrNull { it.rank }

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val list = mutableListOf<Targets>()

		fun addTargets(targets: Targets) {
			list.add(targets)
		}

		fun build() = TargetsList(
			list
		)
	}
}
