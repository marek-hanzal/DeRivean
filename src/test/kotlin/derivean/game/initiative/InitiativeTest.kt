package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import derivean.game.entity.ListOfEntities
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class InitiativeTest {
	@Test
	fun `Empty Entities`() {
		assertEquals("Entities are empty, cannot resolve initiative.", assertFailsWith<NoInitiativeException> {
			Initiative().resolve(Entities())
		}.message)
	}

	@Test
	fun `Entities Without Attribute`() {
		val entities = Entities.build {
			entities(
				Entity.build("foo"),
				Entity.build("bar"),
			)
		}
		assertEquals(entities["foo"], Initiative().resolve(entities))
	}

	@Test
	fun `Entity Selection`() {
		val initiative = Initiative()
		val listOfEntities = ListOfEntities()
		listOfEntities["alfa"] = Entities.build {
			entities(
				Entity.build("Foo") {
					attributes(
						12.0.initiative(),
					)
				},
				Entity.build("Bar") {
					attributes(
						10.0.initiative(),
					)
				},
			)
		}
		listOfEntities["beta"] = Entities.build {
			entities(
				Entity.build("Boo") {
					attributes(
						8.0.initiative(),
					)
				},
				Entity.build("Far") {
					attributes(
						13.0.initiative(),
					)
				},
			)
		}
		assertEquals(listOfEntities["alfa"]["Foo"], initiative.resolve(listOfEntities["alfa"]))
		assertEquals(listOfEntities["beta"]["Far"], initiative.resolve(listOfEntities["beta"]))
		assertEquals(listOfEntities["beta"]["Far"], initiative.resolve(listOfEntities))
	}
}
