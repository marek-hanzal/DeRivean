package derivean.game.ability.abilities.physical

import derivean.game.attribute.common.*
import derivean.game.formation.Formations
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertNotNull
import kotlin.test.assertNull

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

		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(1, targets.size)
			assertEquals(5.0, targets.rank)
			targets.resolve()
			assertEquals(5.0, formations["alfa"]["alfa"].attributes.damage(), "Source does not contain expected amount of damage.")
			assertEquals(5.0, formations["alfa"]["alfa"].attributes.physicalDamage(), "Source does not contain expected amount of damage.")
			assertEquals(10.0, formations["beta"]["beta"].attributes.health(), "Target does not have expected amount of health.")

			targets.resolve()
			assertEquals(10.0, formations["alfa"]["alfa"].attributes.damage(), "Source does not contain expected amount of damage.")
			assertEquals(10.0, formations["alfa"]["alfa"].attributes.physicalDamage(), "Source does not contain expected amount of damage.")
			assertEquals(5.0, formations["beta"]["beta"].attributes.health(), "Target does not have expected amount of health.")
		})
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
		assertNull(formations["alfa"]["alfa"].select(formations) { targets -> targets.resolve() })
		assertEquals(15.0, formations["beta"]["beta"].attributes.health(), "Target's health is different.")
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
		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(1, targets.size)
			assertEquals(5.0, targets.rank)
			targets.resolve()
		})
		assertEquals(10.0, formations["beta"]["beta"].attributes.health(), "Target's health is different.")
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

		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(1, targets.size, "There are more targets!")
			assertEquals(formations["beta"]["beta"], targets.list.first().target)
		})
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
		assertNull(formations["alfa"]["alfa"].select(formations) { targets -> targets.resolve() })
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

		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(38.0, targets.rank)
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["bar"]), targets.map { map -> map.target })
		})
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

		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(35.0, targets.rank)
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["foo"]), targets.map { map -> map.target })
		})
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

		assertNotNull(formations["alfa"]["alfa"].select(formations) { targets ->
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(35.0, targets.rank)
			assertEquals(listOf(formations["beta"]["foo-bar"], formations["beta"]["ooo"]), targets.map { map -> map.target })
		})
	}
}
