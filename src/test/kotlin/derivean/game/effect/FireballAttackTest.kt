package derivean.game.effect

import derivean.game.attribute.CommonAttributes
import derivean.game.attribute.Duel
import derivean.game.attribute.FireAttributes
import org.junit.Test
import kotlin.test.assertEquals

class FireballAttackTest {
	@Test
	fun `Fireball attack against simple foe`() {
		val effect = FireballAttack()
		val duel = Duel.build {
			source(
				CommonAttributes.mana(10),
				FireballAttack.cost(0.25),
				FireballAttack.attack(12),
				FireAttributes.attack(5),
			)
			target(
				CommonAttributes.health(15),
				FireAttributes.defense(5),
			)
		}
		with(effect.applyTo(duel)) {
			assertEquals(-0.25, FireballAttack.cost(source))
		}
	}

	@Test
	fun `Fireball attack against fire elemental foe`() {
	}
}
