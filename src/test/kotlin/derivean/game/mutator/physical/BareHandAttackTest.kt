package derivean.game.mutator.physical

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.Target
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands"))
		}
		val target = Entity.build("Beta") {
			attributes(
				15.0.health(),
				5.0.physicalDefense(),
			)
		}

		assertEquals(5.0, entity.target("attack.bare-hands", target).rank)

		entity.ability("attack.bare-hands", target)
		assertEquals(5.0, entity.damage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, entity.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, target.health(), "Target does not have expected amount of health.")

		entity.ability("attack.bare-hands", target)
		assertEquals(10.0, entity.damage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, entity.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, target.health(), "Target does not have expected amount of health.")
	}

	@Test
	fun `Bare hand attack without damage`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands"))
		}
		val target = Entity.build("Beta") {
			attributes(
				15.0.health(),
				15.0.physicalDefense(),
			)
		}

		with(entity.targets("attack.bare-hands", target)) {
			assertEquals(0.0, rank)
			assertEquals(0, targets.size)
		}
		assertEquals(0.0, entity.target("attack.bare-hands", target).rank)

		entity.ability("attack.bare-hands", target)
		assertEquals(15.0, target.health(), "Target's health is different.")
	}

	@Test
	fun `Bare hand attack with Attributes`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands", Attributes(
				10.0.strength(),
			)))
		}
		val target = Entity.build("Beta") {
			attributes(
				15.0.health(),
				15.0.physicalDefense(),
			)
		}

		assertEquals(5.0, entity.target("attack.bare-hands", target).rank)

		entity.ability("attack.bare-hands", target)
		assertEquals(10.0, target.health(), "Target's health is different.")
	}

	@Test
	fun `Correct targets with dead Entity`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands"))
		}
		val entities = Entities.build {
			addEntity("This one is alive") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("This one is not alive") {
				attributes(
					0.0.health(),
				)
			}
		}

		with(entity.targets("attack.bare-hands", entities)) {
			assertEquals(1, targets.size, "There are more targets!")
			assertEquals(5.0, rank)
		}
	}

	@Test
	fun `No Friendly-fire`() {
		val entities = Entities.build {
			addEntity("Alfa") {
				attributes(
					10.0.strength(),
				)
				ability(BareHandAttack.ability("attack.bare-hands"))
			}
			addEntity("This one is alive") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("This one is not alive") {
				attributes(
					0.0.health(),
				)
			}
		}

		with(entities["Alfa"].targets("attack.bare-hands", entities)) {
			assertEquals(0.0, rank, "Rank should be zero!")
			assertEquals(0, targets.size, "There are more targets!")
		}
	}

	@Test
	fun `Number of targets from an Attribute`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands", Attributes(
				1.2.bareHandTargets(),
			)))
		}
		val entities = Entities.build {
			addEntity("1") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("2") {
				attributes(
					12.0.health(),
					2.0.physicalDefense(),
				)
			}
			addEntity("3") {
				attributes(
					20.0.health(),
				)
			}
		}

		with(entity.targets("attack.bare-hands", entities)) {
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(18.0, rank)
			assertEquals(listOf(entities["3"], entities["2"]), targets.map { it.entity })
			assertEquals(listOf(Target(10.0, entities["3"]), Target(8.0, entities["2"])), targets)
		}
	}

	@Test
	fun `Number of targets from an Attribute with same Rank`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands", Attributes(
				1.2.bareHandTargets(),
			)))
		}
		val entities = Entities.build {
			addEntity("1") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("2") {
				attributes(
					12.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("3") {
				attributes(
					20.0.health(),
				)
			}
		}

		with(entity.targets("attack.bare-hands", entities)) {
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(15.0, rank)
			assertEquals(listOf(entities["3"], entities["1"]), targets.map { it.entity })
			assertEquals(listOf(Target(10.0, entities["3"]), Target(5.0, entities["1"])), targets)
		}
	}

	@Test
	fun `Number of targets from an Attribute with same Rank another attempt`() {
		val entity = Entity.build("Alfa") {
			attributes(
				10.0.strength(),
			)
			ability(BareHandAttack.ability("attack.bare-hands", Attributes(
				1.2.bareHandTargets(),
			)))
		}
		val entities = Entities.build {
			addEntity("0") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("1") {
				attributes(
					15.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("2") {
				attributes(
					12.0.health(),
					5.0.physicalDefense(),
				)
			}
			addEntity("3") {
				attributes(
					20.0.health(),
				)
			}
		}

		with(entity.targets("attack.bare-hands", entities)) {
			assertEquals(2, targets.size, "There are more targets!")
			assertEquals(15.0, rank)
			assertEquals(listOf(entities["3"], entities["0"]), targets.map { it.entity })
			assertEquals(listOf(Target(10.0, entities["3"]), Target(5.0, entities["0"])), targets)
		}
	}
}
