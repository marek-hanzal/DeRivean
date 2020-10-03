package derivean.game.effect

import derivean.game.attribute.Attributes
import derivean.game.attribute.common.*
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.mutator.physical.BareHandAttack
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

		with(entity.targets("attack.bare-hands", Entities(target))) {
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
			entities(
				Entity.build("This one is alive") {
					attributes(
						15.0.health(),
						5.0.physicalDefense(),
					)
				},
				Entity.build("This one is not alive") {
					attributes(
						0.0.health(),
					)
				},
			)
		}

		with(entity.targets("attack.bare-hands", entities)) {
			assertEquals(5.0, rank)
			assertEquals(1, targets.size, "There are more targets!")
		}
	}
}
