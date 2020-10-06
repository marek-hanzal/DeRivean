package derivean.game.initiative

import derivean.game.attribute.common.currentInitiative
import derivean.game.entity.Entities
import derivean.game.formation.Formation
import derivean.game.formation.Formations
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class InitiativeTest {
	@Test
	fun `Empty Entities`() {
		assertEquals("Entities are Empty, cannot resolve initiative.", assertFailsWith<NoInitiativeException> {
			Initiative.build { }.resolve(Formation())
		}.message)
	}

	@Test
	fun `Entities Without Attribute`() {
		val entities = Formation.build("alfa") {
			entity("foo") {}
			entity("bar") {}
		}
		assertEquals("Cannot resolve Initiative, all entities are without Initiative.", assertFailsWith<NoInitiativeException> {
			Initiative.build {}.resolve(entities)
		}.message)
	}

	@Test
	fun `Entity Selection`() {
		val initiative = Initiative.build {}
		val entitiesMap = Formations.build {
			formation("alfa") {
				entity("Foo") {
					attributes(
						12.0.currentInitiative(),
					)
				}
				entity("Bar") {
					attributes(
						10.0.currentInitiative(),
					)
				}
			}
			formation("beta") {
				entity("Boo") {
					attributes(
						8.0.currentInitiative(),
					)
				}
				entity("Far") {
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
