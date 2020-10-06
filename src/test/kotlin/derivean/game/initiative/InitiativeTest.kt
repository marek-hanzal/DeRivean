package derivean.game.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entities
import derivean.game.entity.EntitiesMap
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class InitiativeTest {
	@Test
	fun `Empty Entities`() {
		assertEquals("Entities are Empty, cannot resolve initiative.", assertFailsWith<NoInitiativeException> {
			Initiative.build { }.resolve(Entities())
		}.message)
	}

	@Test
	fun `Entities Without Attribute`() {
		val entities = Entities.build {
			addEntity("foo") {}
			addEntity("bar") {}
		}
		assertEquals("Cannot resolve Initiative, all entities are without Initiative.", assertFailsWith<NoInitiativeException> {
			Initiative.build {}.resolve(entities)
		}.message)
	}

	@Test
	fun `Entity Selection`() {
		val initiative = Initiative.build {}
		val entitiesMap = EntitiesMap.build {
			addEntities("alfa") {
				addEntity("Foo") {
					attributes(
						12.0.currentInitiative(),
					)
				}
				addEntity("Bar") {
					attributes(
						10.0.currentInitiative(),
					)
				}
			}
			addEntities("beta") {
				addEntity("Boo") {
					attributes(
						8.0.currentInitiative(),
					)
				}
				addEntity("Far") {
					attributes(
						13.0.currentInitiative(),
					)
				}
			}
		}

		assertEquals(entitiesMap["alfa"]["Foo"], initiative.resolve(entitiesMap["alfa"]))
		assertEquals(entitiesMap["beta"]["Far"], initiative.resolve(entitiesMap["beta"]))
		assertEquals(entitiesMap["beta"]["Far"], initiative.resolve(entitiesMap))
	}
}
