package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class EntitiesTest {
	@Test
	fun `Builder for Entities`() {
		val entities = Entities.build {
			entity("The Candle Holder") {}
			entity("Wind River") {}
			entity("Orc, the Spellcaster") {}
		}
		assertEquals(3, entities.entities.size)
	}

	@Test
	fun `Accessing existing Entities`() {
		val entity1 = Entity.build("The Candle Holder")
		val entity2 = Entity.build("Wind River")
		val entity3 = Entity.build("Orc, the Spellcaster")

		val entities = Entities.build {
			entity(entity1)
			entity(entity2)
			entity(entity3)
		}
		assertEquals(3, entities.entities.size)
		assertEquals(entity1, entities["The Candle Holder"])
		assertEquals(entity2, entities["Wind River"])
		assertEquals(entity3, entities["Orc, the Spellcaster"])
	}

	@Test
	fun `Access an unknown Entity`() {
		assertEquals("Requested unknown Entity [Kaboom!].", assertFailsWith<UnknownEntityException> {
			Entities()["Kaboom!"]
		}.message)
	}
}
