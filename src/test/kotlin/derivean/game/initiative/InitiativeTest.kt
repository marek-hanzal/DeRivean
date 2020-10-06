package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class InitiativeTest {
	@Test
	fun `Empty Entities`() {
		assertEquals("Entities are Empty, cannot resolve initiative.", assertFailsWith<NoInitiativeException> {
			Initiative().resolve(Entities())
		}.message)
	}

	@Test
	fun `Entities Without Attribute`() {
		val entities = Entities.build {
			entity("foo") {}
			entity("bar") {}
		}
		assertEquals("Cannot resolve Initiative, all entities are without Initiative.", assertFailsWith<NoInitiativeException> {
			Initiative().resolve(entities)
		}.message)
	}

	@Test
	fun `Entity Selection`() {
		val initiative = Initiative()
		val entitiesMap = EntitiesMap.build {
			addEntities("alfa") {
				entity("Foo") {
					attributes(
						12.0.initiative(),
					)
				}
				entity("Bar") {
					attributes(
						10.0.initiative(),
					)
				}
			}
			addEntities("beta") {
				entity("Boo") {
					attributes(
						8.0.initiative(),
					)
				}
				entity("Far") {
					attributes(
						13.0.initiative(),
					)
				}
			}
		}

		assertEquals(entitiesMap["alfa"]["Foo"], initiative.resolve(entitiesMap["alfa"]))
		assertEquals(entitiesMap["beta"]["Far"], initiative.resolve(entitiesMap["beta"]))
		assertEquals(entitiesMap["beta"]["Far"], initiative.resolve(entitiesMap))
	}
}
