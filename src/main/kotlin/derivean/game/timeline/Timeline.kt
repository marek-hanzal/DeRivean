package derivean.game.timeline

class Timeline(time: Double) : AbstractTimeline(time) {
	fun entry(block: Entry.Builder.() -> Unit) = Entry.build(block)

	override fun loop() {
		TODO("Not yet implemented")
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var time = 0.0

		fun build() = Timeline(
			time,
		)
	}
}
