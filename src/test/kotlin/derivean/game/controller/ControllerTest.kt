package derivean.game.controller

import derivean.game.ability.abilities.physical.SwordAttackAbility
import derivean.game.attribute.common.currentInitiative
import derivean.game.attribute.common.health
import derivean.game.attribute.common.roundInitiative
import derivean.game.attribute.common.strength
import derivean.game.mutator.Mutators
import derivean.game.mutator.mutators.being.HumanMutator
import derivean.game.mutator.mutators.being.humanMutator
import derivean.game.mutator.mutators.role.WarriorRoleMutator
import derivean.game.mutator.mutators.role.warriorMutator
import derivean.game.terminator.BattleTerminator
import derivean.game.terminator.TheEndException
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

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

	@Test
	fun `Full loop with Terminator`() {
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
						/**
						 * Make the entity almost dead, thus Terminator should end the loop.
						 */
						entity.attributes.set(1.0.health())
					}
				}
			}
		}.let { controller ->
			/**
			 * Wind River's play
			 */
			controller.loop()
			/**
			 * The Candle Holder's play - in this moment Terminator should stop the game as Wind River will die.
			 */
			assertEquals("The Battle has Ended.", assertFailsWith<TheEndException> {
				controller.loop()
			}.message)
		}
	}

	@Test
	fun `Loop count Termination`() {
		val mutators = Mutators.build {
			mutator(
				HumanMutator.mutator(),
				WarriorRoleMutator.mutator(),
			)
		}

		Controller.build {
			terminator = BattleTerminator.build {
				limit = 3
			}
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
			controller.loop()
			controller.loop()
			/**
			 * The Candle Holder's play - in this moment Terminator should stop the game as Wind River will die.
			 */
			assertEquals("Loop limit reached!", assertFailsWith<TheEndException> {
				controller.loop()
			}.message)
		}
	}

	@Test
	fun `Better Ability Selection`() {
		val mutators = Mutators.build {
			mutator(
				HumanMutator.mutator(),
				WarriorRoleMutator.mutator(),
			)
		}

		Controller.build {
			terminator = BattleTerminator.build {
				limit = 6
			}
			formations {
				formation("alfa") {
					entity("The Candle Holder").let { entity ->
						mutators.humanMutator().mutate(entity)
						mutators.warriorMutator().mutate(entity)
						entity.attributes.set(5.0.currentInitiative())
						entity.attributes.set(5.0.roundInitiative())
						entity.abilities.ability(SwordAttackAbility.build {
							attributes(
								15.0.strength(),
							)
						})
					}
				}
				formation("beta") {
					entity("Wind River").let { entity ->
						mutators.humanMutator().mutate(entity)
						mutators.warriorMutator().mutate(entity)
						entity.attributes.set(
							20.0.health(),
						)
					}
				}
			}
		}.let { controller ->
			controller.loop()
			controller.loop()
			controller.loop()
			assertFailsWith<TheEndException> {
				controller.loop()
			}
		}
	}
}
