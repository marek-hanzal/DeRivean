package derivean.game.ability

import derivean.game.ability.abilities.physical.BareHandAttack
import derivean.game.ability.abilities.physical.bareHand
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AbilitiesTest {
	@Test
	fun `Abilities should return an Ability`() {
		val ability = BareHandAttack.build {
		}
		val abilities = Abilities().apply {
			ability(ability)
		}
		assertEquals(ability, abilities.bareHand())
	}

	@Test
	fun `Unknown Ability should throw`() {
		assertEquals("Requested unknown ability [Kaboom!].", assertFailsWith<UnknownAbilityException> {
			Abilities()["Kaboom!"]
		}.message)
	}
}
