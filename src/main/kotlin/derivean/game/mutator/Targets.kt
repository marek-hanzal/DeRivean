package derivean.game.mutator

class Targets {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Targets(
		)
	}
}
