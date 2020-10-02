package derivean.game.controller

import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.being.HumanMutator
import derivean.game.mutator.role.WarriorClassMutator
import org.junit.Test
import kotlin.test.assertEquals

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val controller = BattleController()

		val alfa = createAlfaTeam()
		val beta = createBetaTeam()

		assertEquals(150.0, alfa["The Candle Holder"].health())
		assertEquals(6.0, alfa["The Candle Holder"].strength())
		assertEquals(150.0, beta["Wind River"].health())
		assertEquals(6.0, beta["Wind River"].strength())

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
