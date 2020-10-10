package derivean.game.timeline

class Timeline(time: Double, step: Double, entries: MutableList<Entry>) : AbstractTimeline(time, step, entries) {
	fun entry(block: Entry.Builder.() -> Unit) = Entry.build(block).also { entries.add(it) }

	override fun loop() {
		step()
		TODO("Not yet implemented")
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		/**
		 * Current time on the Timeline.
		 */
		var time = 0.0

		/**
		 * Time increase per loop (usually not needed to change).
		 */
		var step = 1.0

		fun build() = Timeline(
			time,
			step,
			mutableListOf(),
		)
	}
}
