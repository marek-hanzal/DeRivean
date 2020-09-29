package derivean.game.effect

import derivean.game.attribute.common.*
import derivean.game.entity.Entity
import derivean.game.mutator.physical.BareHandAttack
import org.junit.Test
import kotlin.test.assertEquals

class BareHandAttackTest {
	@Test
	fun `Bare hand attack`() {
		val effect = BareHandAttack()
		val entity = Entity.build {
			attributes(
				10.0.strength(),
			)
		}
		val target = Entity.build {
			attributes(
				15.0.health(),
				5.0.physicalDefense(),
			)
		}

		effect.mutate(entity, target)
		assertEquals(5.0, entity.damage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, entity.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, target.health(), "Target does not have expected amount of health.")

		effect.mutate(entity, target)
		assertEquals(10.0, entity.damage(), "Source does not contain expected amount of damage.")
		assertEquals(10.0, entity.physicalDamage(), "Source does not contain expected amount of damage.")
		assertEquals(5.0, target.health(), "Target does not have expected amount of health.")
	}

	@Test
	fun `Bare hand attack without damage`() {
		val effect = BareHandAttack()
		val entity = Entity.build {
			attributes(
				10.0.strength(),
			)
		}
		val target = Entity.build {
			attributes(
				15.0.health(),
				15.0.physicalDefense(),
			)
		}
		effect.mutate(entity, target)
		assertEquals(15.0, target.health(), "Target's health is different.")
	}
}
