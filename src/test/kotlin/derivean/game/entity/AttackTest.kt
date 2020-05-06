package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class AttackTest {
	@Test
	fun `Empty Attack builder`() {
		with(Attack.build {}) {
			assertEquals(0.0, physical)
			assertEquals(0.0, magical)
		}
	}
}
