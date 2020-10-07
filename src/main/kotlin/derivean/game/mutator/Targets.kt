package derivean.game.mutator

class Targets(val targets: List<Target>) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private val targets: MutableList<Target> = mutableListOf()

		fun build() = Targets(
			targets,
		)
	}
}
