package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.initiative.Initiative
import derivean.game.terminator.BattleTerminator
import derivean.game.terminator.ITerminator
import derivean.game.timeline.ITimeline
import derivean.game.timeline.Timeline

class Controller(initiative: IInitiative, terminator: ITerminator, formations: Formations, timeline: ITimeline) : AbstractController(initiative, terminator, formations, timeline) {
	override fun loop() {
		initiative.initiative(formations) { entity ->
			entity.select(formations) { targets ->
				targets.resolve(timeline)
			}
		}
		terminator.loop(formations)
		timeline.loop()
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var initiative: IInitiative = Initiative.build { }
		lateinit var formations: Formations
		var terminator: ITerminator = BattleTerminator.build {}
		var timeline: ITimeline = Timeline.build {}

		fun formations(block: Formations.Builder.() -> Unit) {
			formations = Formations.build(block)
		}

		fun build() = Controller(
			initiative,
			terminator,
			formations,
			timeline,
		)
	}
}
