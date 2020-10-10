package derivean.game.controller

import derivean.game.attribute.common.currentInitiative
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.mutator.Mutators
import derivean.game.mutator.mutators.being.HumanMutator
import derivean.game.mutator.mutators.being.humanMutator
import derivean.game.mutator.mutators.role.WarriorRoleMutator
import derivean.game.mutator.mutators.role.warriorMutator
import org.junit.Test
import kotlin.test.assertEquals

class ControllerTest {
	@Test
	fun `Do some simple battle, dude!`() {
		val mutators = Mutators.build {
			mutator(
				HumanMutator.mutator(),
				WarriorRoleMutator.mutator(),
			)
		}

		Controller.build {
			formations {
				formation("alfa") {
					entity("The Candle Holder").let { entity ->
						mutators.humanMutator().mutate(entity)
						mutators.warriorMutator().mutate(entity)
						/**
						 * Lower the initiative - so second team member (beta) should
						 * take the initial round.
						 */
						entity.attributes.set(5.0.currentInitiative())
					}
				}
				formation("beta") {
					entity("Wind River").let { entity ->
						mutators.humanMutator().mutate(entity)
						mutators.warriorMutator().mutate(entity)
					}
				}
			}
		}.let { controller ->
			assertEquals(150.0, controller.formations["alfa"]["The Candle Holder"].attributes.health())
			assertEquals(12.0, controller.formations["alfa"]["The Candle Holder"].attributes.strength())
			assertEquals(150.0, controller.formations["beta"]["Wind River"].attributes.health())
			assertEquals(12.0, controller.formations["beta"]["Wind River"].attributes.strength())

			controller.loop()

			assertEquals(0.0, controller.formations["beta"]["Wind River"].attributes.currentInitiative())
			assertEquals(143.0, controller.formations["alfa"]["The Candle Holder"].attributes.health())
			assertEquals(150.0, controller.formations["beta"]["Wind River"].attributes.health())

			controller.loop()

			assertEquals(0.0, controller.formations["alfa"]["The Candle Holder"].attributes.currentInitiative())
			assertEquals(143.0, controller.formations["alfa"]["The Candle Holder"].attributes.health())
			assertEquals(143.0, controller.formations["beta"]["Wind River"].attributes.health())

			/**
			 * Just empty loop to see, if internal initiative works properly.
			 */
			controller.loop()
		}
	}
}
