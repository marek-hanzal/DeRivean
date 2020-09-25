package derivean.game.entity

import derivean.game.attribute.common.*
import derivean.game.attribute.element.fireElement
import derivean.game.attribute.element.waterElement
import derivean.game.mutator.WarriorClassMutator
import derivean.game.mutator.element.water.WaterElementMutator
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
		WaterElementMutator().mutate(entity)
		assertEquals(1.0, entity.classWarrior(), "Entity is not Warrior!")
		assertEquals(-1.0, entity.classMage(), "Entity is Mage!")
		assertEquals(1.0, entity.waterElement(), "Entity is not Water Element!")
		assertEquals(-1.0, entity.fireElement(), "Entity is not weak to Fire!")

		// equipment
		// modifiers
	}
}


