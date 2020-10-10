package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.initiative.Initiative
import derivean.game.terminator.BattleTerminator
import derivean.game.terminator.ITerminator

class Controller(initiative: IInitiative, terminator: ITerminator, formations: Formations) : AbstractController(initiative, terminator, formations) {
	override fun loop() {
		initiative.initiative(formations) { entity ->
			entity.select(formations) { targets ->
				targets.resolve()
			}
		}
		terminator.loop(formations)
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var initiative: IInitiative = Initiative.build { }
		lateinit var formations: Formations
		var terminator: ITerminator = BattleTerminator.build {}

		fun formations(block: Formations.Builder.() -> Unit) {
			formations = Formations.build(block)
		}

		fun build() = Controller(
			initiative,
			terminator,
			formations,
		)
	}
}
