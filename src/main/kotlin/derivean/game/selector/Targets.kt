package derivean.game.selector

import derivean.game.timeline.ITimeline
import kotlin.math.ceil

class Targets(val rank: Double, val list: List<Target>) : Iterable<Target> {
	val size get() = list.size

	fun resolve(timeline: ITimeline) {
		for (target in list) {
			target.resolve(timeline)
		}
	}

	override fun iterator() = list.iterator()

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var limit = 1.0
		val list = mutableListOf<Target>()

		fun target(block: Target.Builder.() -> Unit) = list.add(Target.build(block))

		fun build() = list.filter { it.rank > 0 }.sortedByDescending { it.rank }.take(ceil(limit).toInt()).let {
			Targets(
				it.sumByDouble { target -> target.rank },
				it,
			)
		}
	}
}
