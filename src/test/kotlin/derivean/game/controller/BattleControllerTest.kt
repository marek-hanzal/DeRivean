package derivean.game.controller

import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.HumanMutator
import derivean.game.mutator.`class`.WarriorClassMutator
import org.junit.Test

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val controller = BattleController()

		val alfa = createAlfaTeam()
		val beta = createBetaTeam()

		controller.round(alfa, beta)
	}

	private fun createAlfaTeam() = Entities.build {
		val humanMutator = HumanMutator()
		val warriorClassMutator = WarriorClassMutator()

		with(Entity.build("The Candle Holder")) {
			humanMutator.mutate(this)
			warriorClassMutator.mutate(this)
			entities(this)
		}
	}

	private fun createBetaTeam() = Entities.build {
		val humanMutator = HumanMutator()
		val warriorClassMutator = WarriorClassMutator()

		with(Entity.build("Wind River")) {
			humanMutator.mutate(this)
			warriorClassMutator.mutate(this)
			entities(this)
		}
	}
}
