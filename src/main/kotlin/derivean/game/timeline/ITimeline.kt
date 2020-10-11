package derivean.game.timeline

import derivean.game.log.ILog

interface ITimeline {
	fun entry(block: Entry.Builder.() -> Unit): Entry

	fun loop(log: ILog)
}
