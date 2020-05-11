package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class EntityTest {
	@Test
	fun `Entity with health`() {
		with(Entity.build {
			attribute("health", 10)
		}) {
			assertEquals(10.0, attributes.get("health"), "Health mismatch")
		}
	}
}
