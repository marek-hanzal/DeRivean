package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.initiative.Initiative
import derivean.game.log.ILog
import derivean.game.log.Log
import derivean.game.terminator.BattleTerminator
import derivean.game.terminator.ITerminator
import derivean.game.timeline.ITimeline
import derivean.game.timeline.Timeline

class Controller(
	initiative: IInitiative,
	terminator: ITerminator,
	formations: Formations,
	timeline: ITimeline,
	log: ILog,
) : AbstractController(initiative, terminator, formations, timeline, log) {
	override fun loop() {
		initiative.initiative(formations) { entity ->
			entity.select(formations) { targets ->
				targets.resolve(timeline, log)
			}
		}
		timeline.loop()
		terminator.loop(formations)
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var initiative: IInitiative = Initiative.build { }
		lateinit var formations: Formations
		var terminator: ITerminator = BattleTerminator.build {}
		var timeline: ITimeline = Timeline.build {}
		var log: ILog = Log.build { }

		fun formations(block: Formations.Builder.() -> Unit) {
			formations = Formations.build(block)
		}

		fun build() = Controller(
			initiative,
			terminator,
			formations,
			timeline,
			log,
		)
	}
}
