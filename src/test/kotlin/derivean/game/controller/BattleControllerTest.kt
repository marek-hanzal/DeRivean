package derivean.game.controller

import derivean.game.attribute.common.health
import derivean.game.attribute.common.initiative
import derivean.game.attribute.common.strength
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap
import derivean.game.entity.Entity
import derivean.game.initiative.Initiative
import derivean.game.mutator.being.HumanMutator
import derivean.game.mutator.role.WarriorClassMutator
import org.junit.Test
import kotlin.test.assertEquals

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		BattleController().let { controller ->
			Initiative().let { initiative ->
				EntitiesMap.build {
					addEntities("alfa", createAlfaTeam())
					addEntities("beta", createBetaTeam())
				}.let { entitiesMap ->
					assertEquals(150.0, entitiesMap["alfa"]["The Candle Holder"].health())
					assertEquals(12.0, entitiesMap["alfa"]["The Candle Holder"].strength())
					assertEquals(150.0, entitiesMap["beta"]["Wind River"].health())
					assertEquals(12.0, entitiesMap["beta"]["Wind River"].strength())

					controller.loop(initiative, entitiesMap)

					assertEquals(0.0, entitiesMap["beta"]["Wind River"].initiative())
					assertEquals(143.0, entitiesMap["alfa"]["The Candle Holder"].health())
					assertEquals(150.0, entitiesMap["beta"]["Wind River"].health())

					controller.loop(initiative, entitiesMap)

					assertEquals(0.0, entitiesMap["alfa"]["The Candle Holder"].initiative())
					assertEquals(143.0, entitiesMap["alfa"]["The Candle Holder"].health())
					assertEquals(143.0, entitiesMap["beta"]["Wind River"].health())
				}
			}
		}
	}

	private fun createAlfaTeam() = Entities.build {
		Entity.build("The Candle Holder").let { entity ->
			HumanMutator().mutate(entity)
			WarriorClassMutator().mutate(entity)
			addEntity(entity)
			/**
			 * Lower the initiative - so second team member (beta) should
			 * take the initial round.
			 */
			entity.attributes(5.0.initiative())
		}
	}

	private fun createBetaTeam() = Entities.build {
		Entity.build("Wind River").let { entity ->
			HumanMutator().mutate(entity)
			WarriorClassMutator().mutate(entity)
			addEntity(entity)
		}
	}
}
