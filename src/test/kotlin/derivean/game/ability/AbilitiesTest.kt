package derivean.game.ability

import derivean.game.mutator.physical.BareHandAttack
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class AbilitiesTest {
	@Test
	fun `Abilities should return an Ability`() {
		val ability = Ability("foo", BareHandAttack())
		val abilities = Abilities().apply {
			ability(ability)
		}
		assertEquals(ability, abilities["foo"])
	}

	@Test
	fun `Unknown Ability should throw`() {
		assertEquals("Requested unknown ability [Kaboom!].", assertFailsWith<UnknownAbilityException> {
			Abilities()["Kaboom!"]
		}.message)
	}
}
