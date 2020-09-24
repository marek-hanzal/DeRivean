package derivean.game.entity

import derivean.game.attribute.health
import derivean.game.attribute.level
import derivean.game.attribute.xp
import org.junit.Test

class EntityTest {
	@Test
	fun `Common Entity`() {
		val entity = Entity.build {
			attribute(
				1.0.level(),
				0.0.xp(),
				100.0.health(),
			)
		}
		// equipment
		// modifiers
	}
}


