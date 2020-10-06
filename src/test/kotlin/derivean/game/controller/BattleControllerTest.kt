package derivean.game.controller

import derivean.game.attribute.common.currentInitiative
import derivean.game.formation.Formations
import derivean.game.initiative.Initiative
import derivean.game.mutator.Mutators
import derivean.game.mutator.being.HumanMutator
import derivean.game.mutator.being.humanMutator
import derivean.game.mutator.role.WarriorClassMutator
import derivean.game.mutator.role.warriorMutator
import org.junit.Test
import kotlin.test.assertEquals

class BattleControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val mutators = Mutators.build {
			mutator(
				HumanMutator.mutator(),
				WarriorClassMutator.mutator(),
			)
		}

		BattleController().let { controller ->
			Initiative.build {}.let { initiative ->
				Formations.build {
					formation("alfa") {
						entity("The Candle Holder") {
							/**
							 * Lower the initiative - so second team member (beta) should
							 * take the initial round.
							 */
							attributes(5.0.currentInitiative())
						}.let { entity ->
							mutators.humanMutator().mutate(entity)
							mutators.warriorMutator().mutate(entity)
						}
					}
					formation("beta") {
						entity("Wind River") {
						}.let { entity ->
							mutators.humanMutator().mutate(entity)
							mutators.warriorMutator().mutate(entity)
						}
					}
				}.let { formations ->
					assertEquals(150.0, formations["alfa"]["The Candle Holder"].health())
					assertEquals(12.0, entitiesMap["alfa"]["The Candle Holder"].strength())
					assertEquals(150.0, entitiesMap["beta"]["Wind River"].health())
					assertEquals(12.0, entitiesMap["beta"]["Wind River"].strength())

					controller.loop(initiative, entitiesMap)

					assertEquals(0.0, entitiesMap["beta"]["Wind River"].currentInitiative())
					assertEquals(143.0, entitiesMap["alfa"]["The Candle Holder"].health())
					assertEquals(150.0, entitiesMap["beta"]["Wind River"].health())

					controller.loop(initiative, entitiesMap)

					assertEquals(0.0, entitiesMap["alfa"]["The Candle Holder"].currentInitiative())
					assertEquals(143.0, entitiesMap["alfa"]["The Candle Holder"].health())
					assertEquals(143.0, entitiesMap["beta"]["Wind River"].health())
				}
			}
		}
	}
}
