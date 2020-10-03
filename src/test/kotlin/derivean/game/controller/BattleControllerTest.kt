package derivean.game.controller

import derivean.game.attribute.common.health
import derivean.game.attribute.common.initiative
import derivean.game.attribute.common.strength
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.entity.ListOfEntities
import derivean.game.initiative.Initiative
import derivean.game.mutator.being.HumanMutator
import derivean.game.mutator.role.WarriorClassMutator
import org.junit.Test
import kotlin.test.assertEquals

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val controller = BattleController()
		val initiative = Initiative()
		val listOfEntities = ListOfEntities()

		listOfEntities["alfa"] = createAlfaTeam()
		listOfEntities["beta"] = createBetaTeam()

		assertEquals(150.0, listOfEntities["alfa"]["The Candle Holder"].health())
		assertEquals(6.0, listOfEntities["alfa"]["The Candle Holder"].strength())
		assertEquals(150.0, listOfEntities["beta"]["Wind River"].health())
		assertEquals(6.0, listOfEntities["beta"]["Wind River"].strength())

		controller.loop(initiative, listOfEntities)
	}

	private fun createAlfaTeam() = Entities.build {
		val humanMutator = HumanMutator()
		val warriorClassMutator = WarriorClassMutator()

		with(Entity.build("The Candle Holder")) {
			humanMutator.mutate(this)
			warriorClassMutator.mutate(this)
			entities(this)
			/**
			 * Lower the initiative - so second team member (beta) should
			 * take the initial round.
			 */
			this.attributes(5.0.initiative())
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
