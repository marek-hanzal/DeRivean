package derivean.game.entity

import derivean.game.attribute.common.health
import derivean.game.attribute.common.level
import derivean.game.attribute.common.xp
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


