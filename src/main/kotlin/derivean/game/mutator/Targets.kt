package derivean.game.mutator

class Targets(val entity: Mutator, val mutator: IMutator, val rank: Double, val targets: List<Target>) {
	companion object {
		inline fun build(entity: Mutator, mutator: IMutator, limit: Double, block: Builder.() -> Unit) = Builder(entity, mutator, limit.toInt()).apply(block).build()
	}

	class Builder(private val entity: Mutator, private val mutator: IMutator, private val limit: Int) {
		private val targets: MutableList<Target> = mutableListOf()

		fun addTarget(target: Target) {
			targets.add(target)
		}

		fun build() = with(targets.sortedByDescending { it.rank }.take(limit)) {
			Targets(
				entity,
				mutator,
				this.sumByDouble { it.rank },
				this,
			)
		}
	}
}
