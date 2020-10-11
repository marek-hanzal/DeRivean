package derivean.game.log

class Record {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		fun build() = Record(
		)
	}
}
