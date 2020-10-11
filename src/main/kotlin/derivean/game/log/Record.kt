package derivean.game.log

class Record(val log: String) {
	override fun toString() = log

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		private var log: String = ""

		fun log(log: String) {
			this.log = log
		}

		fun build() = Record(
			log,
		)
	}
}
