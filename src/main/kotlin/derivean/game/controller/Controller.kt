package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.initiative.Initiative

class Controller(initiative: IInitiative, formations: Formations) : AbstractController(initiative, formations) {
	override fun loop() {
		initiative.initiative(formations) { entity ->
			entity.select(formations) { targets ->
				targets.resolve()
			}
		}
	}

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var initiative: IInitiative = Initiative.build { }
		lateinit var formations: Formations

		fun formations(block: Formations.Builder.() -> Unit) {
			formations = Formations.build(block)
		}

		fun build() = Controller(
			initiative,
			formations,
		)
	}
}
