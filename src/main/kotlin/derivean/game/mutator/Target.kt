package derivean.game.mutator

class Target(val rank: Double) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var rank: Double = 0.0

		fun build() = Target(
			rank,
		)
	}
}
