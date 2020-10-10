package derivean.game.mutator.being

import derivean.game.ability.physical.BareHandAttack
import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class HumanMutatorTest {
	@Test
	fun `Basic mutation of an Entity`() {
		val entity = Entity.build("Wind River")
		assertEquals(0.0, entity.attributes.health())
		HumanMutator().mutate(entity)
		assertEquals(100.0, entity.attributes.health())
		assertEquals(10.0, entity.attributes.strength(), "Strength is not set from Equipment or in different value.")
		assertTrue(entity.abilities[BareHandAttack.ABILITY] is BareHandAttack)
	}
}
