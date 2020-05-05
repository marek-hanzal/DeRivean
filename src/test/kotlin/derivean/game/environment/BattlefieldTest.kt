package derivean.game.environment

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import org.junit.Test
import kotlin.test.assertEquals

class BattlefieldTest {
	@Test
	fun `Spirits should attack each other`() {
		val gandalf = Spirit.build(Entity.build {
		}) {}
		val saruman = Spirit.build(Entity.build {
		}) {}

		with(Battlefield.build {}) {
			enemies(gandalf, saruman)
			assertEquals(listOf(saruman), relationships().enemiesOf(gandalf))
			assertEquals(listOf(gandalf), relationships().enemiesOf(saruman))
			prepare()
			tick()
		}
	}
}
