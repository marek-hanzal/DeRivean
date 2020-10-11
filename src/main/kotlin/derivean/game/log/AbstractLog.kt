package derivean.game.log

abstract class AbstractLog(val list: MutableList<Record>) : ILog {
	override fun record(block: Record.Builder.() -> Unit) {
		list.add(Record.build(block))
	}

	override fun iterator() = list.iterator()
}
