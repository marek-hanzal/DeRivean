package derivean.game.ability.physical

import derivean.game.attribute.common.*
import derivean.game.formation.Formations
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {})
				}
			}
			formation("beta") {
				entity("beta") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
			}
		}

		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(1, it.list.size)
			assertEquals(5.0, it.list.first().rank)
			it.list.first().let { target ->
				target.resolve()
				assertEquals(5.0, target.entity.damage(), "Source does not contain expected amount of damage.")
				assertEquals(5.0, target.entity.physicalDamage(), "Source does not contain expected amount of damage.")
				assertEquals(10.0, target.target.health(), "Target does not have expected amount of health.")

				target.resolve()
				assertEquals(10.0, target.entity.damage(), "Source does not contain expected amount of damage.")
				assertEquals(10.0, target.entity.physicalDamage(), "Source does not contain expected amount of damage.")
				assertEquals(5.0, target.target.health(), "Target does not have expected amount of health.")
			}
		}
	}

	@Test
	fun `Bare hand attack without damage`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {})
				}
			}
			formation("beta") {
				entity("beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
			}
		}
		assertEquals(0, formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).list.size)
		assertEquals(15.0, formations["beta"]["beta"].health(), "Target's health is different.")
	}

	@Test
	fun `Bare hand attack with Attributes`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
						)
					})
				}
			}
			formation("beta") {
				entity("beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
			}
		}
		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let { targets ->
			assertEquals(1, targets.size)
			assertEquals(5.0, targets.rank)
			targets.resolve()
		}
		assertEquals(10.0, formations["beta"]["beta"].health(), "Target's health is different.")
	}

	@Test
	fun `Correct targets with dead Entity`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
						)
					})
				}
			}
			formation("beta") {
				entity("beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
				entity("gama") {
					attributes(
						0.0.health(),
					)
				}
			}
		}

		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(1, it.size, "There are more targets!")
			assertEquals(formations["beta"]["beta"], it.first().target)
		}
	}

	@Test
	fun `No Friendly-fire`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.health(),
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
						)
					})
				}
				entity("beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
				entity("gama") {
					attributes(
						0.0.health(),
					)
				}
			}
		}
		assertEquals(0, formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).size, "There are more targets!")
	}

	@Test
	fun `Number of targets from an Attribute`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
							1.2.bareHandTargets(),
						)
					})
				}
				entity("beta") {
					attributes(
						15.0.health(),
					)
				}
			}
			formation("beta") {
				entity("foo") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("bar") {
					attributes(
						12.0.health(),
						2.0.physicalDefense(),
					)
				}
				entity("foo-bar") {
					attributes(
						20.0.health(),
					)
				}
			}
		}

		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(2, it.size, "There are more targets!")
			assertEquals(38.0, it.sumByDouble { sum -> sum.rank })
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["bar"]), it.map { map -> map.target })
		}
	}

	@Test
	fun `Number of targets from an Attribute with same Rank`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
							1.2.bareHandTargets(),
						)
					})
				}
				entity("beta") {
					attributes(
						15.0.health(),
					)
				}
			}
			formation("beta") {
				entity("foo") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("bar") {
					attributes(
						12.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("foo-bar") {
					attributes(
						20.0.health(),
					)
				}
			}
		}

		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(2, it.size, "There are more targets!")
			assertEquals(35.0, it.sumByDouble { sum -> sum.rank })
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["foo"]), it.map { map -> map.target })
		}
	}

	@Test
	fun `Number of targets from an Attribute with same Rank another attempt`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
							1.2.bareHandTargets(),
						)
					})
				}
				entity("beta") {
					attributes(
						15.0.health(),
					)
				}
			}
			formation("beta") {
				entity("ooo") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("foo") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("bar") {
					attributes(
						12.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("foo-bar") {
					attributes(
						20.0.health(),
					)
				}
			}
		}

		formations["alfa"]["alfa"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(2, it.size, "There are more targets!")
			assertEquals(35.0, it.sumByDouble { sum -> sum.rank })
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["ooo"]), it.map { map -> map.target })
		}
	}
}
