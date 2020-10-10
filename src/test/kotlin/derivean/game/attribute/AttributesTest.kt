package derivean.game.attribute

import org.junit.Test
import kotlin.test.assertEquals

internal class AttributesTest {
	@Test
	fun `Simple equals`() {
		val attributes = Attributes.from(
			"health" to 5.0,
			"stamina" to 1.0,
			"mana" to 5.0,
		)
		assertEquals(attributes, attributes)
	}

	@Test
	fun `Simple addition`() {
		val attributes = Attributes.from(
			"health" to 25.0,
			"stamina" to 10.0,
			"mana" to 5.0,
		)
		val modifyBy = Attributes.from(
			"health" to -4.5,
			"stamina" to -0.5,
			"mana" to 0.5,
		)
		attributes.incBy(modifyBy)
		assertEquals(
			Attributes.from(
				"health" to 20.5,
				"stamina" to 9.5,
				"mana" to 5.5,
			), attributes
		)
	}

	@Test
	fun `Attribute Inc & Dec`() {
		val attributes = Attributes.from("value" to 10.0, "zero" to 1.0)
		attributes.inc("health" to 20.0)
		attributes.decOrZero("value" to 5.0)
		attributes.decOrZero("zero" to 5.0)
		assertEquals(
			Attributes.from(
				"health" to 20.0,
				"value" to 5.0,
				"zero" to 0.0
			), attributes
		)
	}

	@Test
	fun `Reset same Attribute`() {
		val attributes = Attributes.from("value" to 10.0)
		attributes.set("value" to 12.0)
		assertEquals(12.0, attributes["value"])
		attributes.set(Attributes.from("value" to 14.0))
		assertEquals(14.0, attributes["value"])
	}
}
