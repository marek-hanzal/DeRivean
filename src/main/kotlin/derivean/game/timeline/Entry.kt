package derivean.game.timeline

class Entry(time: Double, block: () -> Unit) : AbstractEntry(time, block) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var time: Double = 1.0
		var block: () -> Unit = {}

		fun resolve(resolve: () -> Unit) {
			block = resolve
		}

		fun build() = Entry(
			time,
			block,
		)
	}
}
