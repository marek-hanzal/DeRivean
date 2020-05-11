package derivean.game.entity

import org.junit.Test
import kotlin.test.assertEquals

internal class AttributesTest {
	@Test
	fun `Simple equals`() {
		val attributes = Attributes(mapOf(
			"health" to 5.0,
			"stamina" to 1.0,
			"mana" to 5.0
		))
		assertEquals(attributes, attributes)
	}

	@Test
	fun `Simple addition`() {
		val attributes = Attributes(mapOf(
			"health" to 25.0,
			"stamina" to 10.0,
			"mana" to 5.0
		))
		val modifyBy = Attributes(mapOf(
			"health" to -4.5,
			"stamina" to -0.5,
			"mana" to 0.5
		))
		attributes += modifyBy
		assertEquals(Attributes(mapOf(
			"health" to 20.5,
			"stamina" to 9.5,
			"mana" to 5.5
		)), attributes)
	}

	@Test
	fun `Attribute Inc & Dec`() {
		val attributes = Attributes(mapOf("value" to 10.0))
		attributes.inc("health", 20)
		attributes.dec("value", 5)
		assertEquals(Attributes(mapOf(
			"health" to 20.0,
			"value" to 5.0
		)), attributes)
	}
}
