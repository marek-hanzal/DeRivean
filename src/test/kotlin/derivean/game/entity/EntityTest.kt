package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class EntityTest {
	@Test
	fun `Entity name`() {
		val entity = Entity.build("Candle, the Grave Hunter")
		assertEquals("Candle, the Grave Hunter", entity.toString())
	}
}
