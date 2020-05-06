package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

class SpiritsTest {
	@Test
	fun `Add Spirit`() {
		with(Spirits()) {
			val spirit = Spirit.build("The Spirit", Entity.build {}) {}
			add(spirit)
			add(spirit)
			assertEquals(1, list().count())
			assertEquals(listOf(spirit), list())
		}
	}

	@Test
	fun `Remove Spirit`() {
		with(Spirits()) {
			val spirit = Spirit.build("The Spirit", Entity.build {}) {}
			add(spirit)
			add(spirit)
			assertEquals(1, list().count())
			remove(spirit)
			assertEquals(0, list().count())
			assertEquals(listOf(), list())
		}
	}
}
