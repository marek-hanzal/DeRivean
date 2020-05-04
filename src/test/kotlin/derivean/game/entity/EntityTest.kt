package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class EntityTest {
	@Test
	fun `entity builder test`() {
		Entity.build {
			health = 10.0
		}.let {
			assertEquals(10.0, it.health, "Health mismatch")
		}
	}
}
