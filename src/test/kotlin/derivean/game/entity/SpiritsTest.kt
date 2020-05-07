package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class SpiritsTest {
	@Test
	fun `Add Spirit`() {
		with(Spirits()) {
			val spirit = Spirit.build("The Spirit", Entity.build {}) {}
			add(spirit)
			add(spirit)
			assertEquals(1, list().count())
			assertEquals(listOf(spirit), list())
			assertEquals(spirit, get("The Spirit"))
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
			with(Spirits()) {
				assertEquals("Requested unknown Spirit [The Spirit].", assertFailsWith<UnknownSpiritException> {
					get("The Spirit")
				}.message)
			}
		}
	}

	@Test
	fun `Request unknown Spirit`() {
		with(Spirits()) {
			assertEquals("Requested unknown Spirit [dunno].", assertFailsWith<UnknownSpiritException> {
				get("dunno")
			}.message)
		}
	}
}
