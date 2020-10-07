package derivean.game.ability.physical

import derivean.game.attribute.common.*
import derivean.game.formation.Formations
import derivean.game.selector.RankSelector
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("1") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {})
				}
			}
			formation("beta") {
				entity("1") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
			}
		}

		formations["alfa"]["1"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(1, it.size)
			assertEquals(5.0, it.first().rank)
		}

		formations["alfa"]["1"].ability(BareHandAttack.ABILITY, formations["alfa"]["1"])
		assertEquals(5.0, formations["alfa"]["1"].damage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, formations["alfa"]["1"].physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, formations["beta"]["1"].health(), "Target does not have expected amount of health.")

		formations["alfa"]["1"].ability(BareHandAttack.ABILITY, formations["alfa"]["1"])
		assertEquals(10.0, formations["alfa"]["1"].damage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, formations["alfa"]["1"].physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, formations["beta"]["1"].health(), "Target does not have expected amount of health.")
	}

	@Test
	fun `Bare hand attack without damage`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("1") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {})
				}
			}
			formation("beta") {
				entity("1") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
			}
		}
		formations["alfa"]["1"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(0, it.size)
		}
		assertEquals(15.0, formations["beta"]["1"].health(), "Target's health is different.")
	}

	@Test
	fun `Bare hand attack with Attributes`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("Alfa") {
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
				entity("Beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
			}
		}
		formations["alfa"]["1"].targets(BareHandAttack.ABILITY, formations).let {
			assertEquals(1, it.size)
			assertEquals(5.0, it.first().rank)
		}
		assertEquals(10.0, formations["beta"]["1"].health(), "Target's health is different.")
	}

	@Test
	fun `Correct targets with dead Entity`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("Alfa") {
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
				entity("Beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
				entity("Gama") {
					attributes(
						0.0.health(),
					)
				}
			}
		}

		RankSelector.build { }.select(formations["alfa"]["Alfa"], formations).let {
			assertEquals(1, it.map.size, "There are more targets!")
			assertEquals(mapOf("Beta" to formations["beta"]["Beta"]), it.map)
		}
	}

	@Test
	fun `No Friendly-fire`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("Alfa") {
					attributes(
						10.0.strength(),
					)
					ability(BareHandAttack.build {
						attributes(
							10.0.strength(),
						)
					})
				}
				entity("Beta") {
					attributes(
						15.0.health(),
						15.0.physicalDefense(),
					)
				}
				entity("Gama") {
					attributes(
						0.0.health(),
					)
				}
			}
		}
		RankSelector.build { }.select(formations["alfa"]["Alfa"], formations).let {
			assertEquals(0, it.map.size, "There are more targets!")
		}
	}

	@Test
	fun `Number of targets from an Attribute`() {
		val formations = Formations.build {
			formation("alfa") {
				entity("Alfa") {
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
				entity("Beta") {
					attributes(
						15.0.health(),
					)
				}
			}
			formation("beta") {
				entity("1") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				}
				entity("2") {
					attributes(
						12.0.health(),
						2.0.physicalDefense(),
					)
				}
				entity("3") {
					attributes(
						20.0.health(),
					)
				}
			}
		}

		RankSelector.build { }.select(formations["alfa"]["Alfa"], formations).let {
			assertEquals(2, it.map.size, "There are more targets!")
//			assertEquals(18.0, rank)
//			assertEquals(listOf(entities["3"], entities["2"]), targets.map { it.entity })
//			assertEquals(listOf(Target(10.0, entities["3"]), Target(8.0, entities["2"])), targets)
		}
	}

//	@Test
//	fun `Number of targets from an Attribute with same Rank`() {
//		val entity = Entity.build("Alfa") {
//			attributes(
//				10.0.strength(),
//			)
//			ability(
//				BareHandAttack.ability(
//					"attack.bare-hands", Attributes(
//						1.2.bareHandTargets(),
//					)
//				)
//			)
//		}
//		val entities = Entities.build {
//			entity("1") {
//				attributes(
//					15.0.health(),
//					5.0.physicalDefense(),
//				)
//			}
//			entity("2") {
//				attributes(
//					12.0.health(),
//					5.0.physicalDefense(),
//				)
//			}
//			entity("3") {
//				attributes(
//					20.0.health(),
//				)
//			}
//		}
//
//		with(entity.targets("attack.bare-hands", entities)) {
//			assertEquals(2, targets.size, "There are more targets!")
//			assertEquals(15.0, rank)
//			assertEquals(listOf(entities["3"], entities["1"]), targets.map { it.entity })
//			assertEquals(listOf(Target(10.0, entities["3"]), Target(5.0, entities["1"])), targets)
//		}
//	}
//
//	@Test
//	fun `Number of targets from an Attribute with same Rank another attempt`() {
//		val entity = Entity.build("Alfa") {
//			attributes(
//				10.0.strength(),
//			)
//			ability(
//				BareHandAttack.ability(
//					"attack.bare-hands", Attributes(
//						1.2.bareHandTargets(),
//					)
//				)
//			)
//		}
//		val entities = Entities.build {
//			entity("0") {
//				attributes(
//					15.0.health(),
//					5.0.physicalDefense(),
//				)
//			}
//			entity("1") {
//				attributes(
//					15.0.health(),
//					5.0.physicalDefense(),
//				)
//			}
//			entity("2") {
//				attributes(
//					12.0.health(),
//					5.0.physicalDefense(),
//				)
//			}
//			entity("3") {
//				attributes(
//					20.0.health(),
//				)
//			}
//		}
//
//		with(entity.targets("attack.bare-hands", entities)) {
//			assertEquals(2, targets.size, "There are more targets!")
//			assertEquals(15.0, rank)
//			assertEquals(listOf(entities["3"], entities["0"]), targets.map { it.entity })
//			assertEquals(listOf(Target(10.0, entities["3"]), Target(5.0, entities["0"])), targets)
//		}
//	}
}
