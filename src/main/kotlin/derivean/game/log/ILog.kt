package derivean.game.log

interface ILog : Iterable<Record> {
	fun record(block: Record.Builder.() -> Unit)
}
