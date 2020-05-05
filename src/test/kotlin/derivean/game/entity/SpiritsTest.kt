package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class SpiritsTest {
	@Test
	fun `Add Spirit`() {
		with(Spirits()) {
			val spirit = Spirit.build(Entity.build {}) {}
			add(spirit)
			add(spirit)
			assertEquals(1, spirits().count())
			assertEquals(listOf(spirit), spirits())
		}
	}

	@Test
	fun `Remove Spirit`() {
		with(Spirits()) {
			val spirit = Spirit.build(Entity.build {}) {}
			add(spirit)
			add(spirit)
			assertEquals(1, spirits().count())
			remove(spirit)
			assertEquals(0, spirits().count())
			assertEquals(listOf(), spirits())
		}
	}
}
