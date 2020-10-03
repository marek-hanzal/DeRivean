package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.Entity
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
		val alfa = Entities.build {
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
		val beta = Entities.build {
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
		assertEquals(alfa["Foo"], initiative.resolve(alfa))
		assertEquals(beta["Far"], initiative.resolve(beta))
		assertEquals(beta["Far"], initiative.resolve(listOf(alfa, beta)))
	}
}
