package derivean.game.timeline

interface ITimeline {
	fun entry(block: Entry.Builder.() -> Unit): Entry

	fun loop()
}
