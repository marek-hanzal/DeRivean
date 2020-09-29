package derivean.game.controller

import derivean.game.entity.Entities
import derivean.game.mutator.HumanMutator
import derivean.game.mutator.`class`.WarriorClassMutator
import org.junit.Test

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val humanMutator = HumanMutator()
		val warriorClassMutator = WarriorClassMutator()
		val controller = BattleController()


		val alfa = Entities.build {
			entities(

			)
		}
	}
}
