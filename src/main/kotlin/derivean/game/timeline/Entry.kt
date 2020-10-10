package derivean.game.timeline

class Entry : AbstractEntry() {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Entry(
		)
	}
}
