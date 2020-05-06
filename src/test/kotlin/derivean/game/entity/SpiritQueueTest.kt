package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class SpiritQueueTest {
	@Test
	fun `Initiative Spirit Queue`() {
		val spirits = Spirits(
			Spirit.build("Saruman", Entity.build {
				initiative = 12.1
			}) {},
			Spirit.build("Frodo", Entity.build {
				initiative = 8.35
			}) {},
			Spirit.build("Gandalf", Entity.build {
				initiative = 10.3
			}) {}
		)

		with(SpiritQueue(spirits)) {
			reset()
			assertEquals(3, count())
			assertEquals(12.1, getSpirit().entity.initiative)
			assertEquals(2, count())
			assertEquals(10.3, getSpirit().entity.initiative)
			assertEquals(1, count())
			assertEquals(8.35, getSpirit().entity.initiative)
			assertEquals(true, isEmpty())
			assertEquals("Spirit Queue is empty; cannot get a Spirit!", assertFailsWith<EntityException> {
				getSpirit()
			}.message)
			reset()
			assertEquals(3, count())
		}
		/**
		 * original spirits should not be touched
		 */
		assertEquals(3, spirits.count())
	}
}
