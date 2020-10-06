package derivean.game.mutator

class Targets(val targets: List<Target>, val rank: Double) {
	companion object {
		inline fun build(limit: Double, block: Builder.() -> Unit) = Builder(limit.toInt()).apply(block).build()
		inline fun build(block: Builder.() -> Unit) = build(1.0, block)
	}

	class Builder(private val limit: Int) {
		private val targets: MutableList<Target> = mutableListOf()

		fun target(target: Target) {
			targets.add(target)
		}

		fun build() = with(targets.sortedByDescending { it.rank }.take(limit)) {
			Targets(
				this,
				this.sumByDouble { it.rank },
			)
		}
	}
}
