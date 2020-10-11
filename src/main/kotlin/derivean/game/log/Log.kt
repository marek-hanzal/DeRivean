package derivean.game.log

class Log(list: MutableList<Record>) : AbstractLog(list) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		val list = mutableListOf<Record>()

		fun build() = Log(
			list,
		)
	}
}
