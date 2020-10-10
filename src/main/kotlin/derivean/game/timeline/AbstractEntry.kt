package derivean.game.timeline

abstract class AbstractEntry(val time: Double, val block: () -> Unit) : IEntry {
	override fun resolve() = block()
}
