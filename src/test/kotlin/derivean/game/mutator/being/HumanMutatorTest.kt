package derivean.game.mutator.being

import derivean.game.attribute.common.health
import derivean.game.entity.Entity
import org.junit.Test
import kotlin.test.assertEquals

class HumanMutatorTest {
	@Test
	fun `Basic mutation of an Entity`() {
		val entity = Entity.build("Wind River")
		assertEquals(0.0, entity.health())
		HumanMutator().mutate(entity)
		assertEquals(100.0, entity.health())
	}
}
