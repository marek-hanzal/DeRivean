package derivean.game.mutator

class Targets(val rank: Double, val targets: List<Target>) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var rank: Double = 0.0
		private val targets: MutableList<Target> = mutableListOf()

		fun target(target: Target) {
			rank += target.rank
			targets.add(target)
		}

		fun build() = Targets(
			rank,
			targets,
		)
	}
}
