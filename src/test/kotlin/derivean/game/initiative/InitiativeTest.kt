package derivean.game.initiative

import derivean.game.attribute.common.initiative
import derivean.game.entity.Entities
import derivean.game.entity.Entity
import org.junit.Test
import kotlin.test.assertEquals

class InitiativeTest {
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
