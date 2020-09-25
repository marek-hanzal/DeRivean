package derivean.game.entity

import derivean.game.attribute.common.*
import derivean.game.mutator.WarriorClassMutator
import org.junit.Test
import kotlin.test.assertEquals

class EntityTest {
	@Test
	fun `Common Entity`() {
		val entity = Entity.build {
			attributes(
				1.0.level(),
				0.0.xp(),
				100.0.health(),
				100.0.maxHealth(),
			)
		}
		WarriorClassMutator().mutate(entity)
		assertEquals(1.0, entity.classWarrior(), "Entity is not Warrior!")
		assertEquals(-1.0, entity.classMage(), "Entity is Mage!")

		// equipment
		// modifiers
	}
}


