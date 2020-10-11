package derivean.game.log

interface ILog : Iterable<Record> {
	fun log(log: String)

	fun record(block: Record.Builder.() -> Unit)
}
