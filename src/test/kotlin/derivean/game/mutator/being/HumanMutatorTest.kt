package derivean.game.mutator.being

import derivean.game.attribute.common.health
import derivean.game.attribute.common.strength
import derivean.game.entity.Entity
import derivean.game.mutator.physical.BareHandAttack
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertTrue

class HumanMutatorTest {
	@Test
	fun `Basic mutation of an Entity`() {
		val entity = Entity.build("Wind River")
		assertEquals(0.0, entity.health())
		HumanMutator().mutate(entity).evaluate()
		assertEquals(100.0, entity.health())
		assertEquals(5.0, entity.strength(), "Strength is not set from Equipment or in different value.")
		assertTrue(entity.abilities["attack.bare-hands"].mutator is BareHandAttack)
	}
}
