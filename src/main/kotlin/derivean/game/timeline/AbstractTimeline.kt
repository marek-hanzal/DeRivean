package derivean.game.timeline

abstract class AbstractTimeline(var time: Double, val step: Double, val entries: MutableList<Entry>) : ITimeline {
	fun step() {
		time += step
	}
}
