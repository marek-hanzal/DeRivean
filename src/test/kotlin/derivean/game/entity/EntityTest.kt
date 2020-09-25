package derivean.game.entity

import derivean.game.attribute.common.health
import derivean.game.attribute.common.maxHealth
import derivean.game.mutator.HumanMutator
import org.junit.Test

class EntityTest {
	@Test
	fun `Common Entity`() {
		val entity = Entity.build {
			attributes(
				100.0.health(),
				100.0.maxHealth(),
			)
		}
		val enemy = Entity.build {
			attributes(
				100.0.health(),
				100.0.maxHealth(),
			)
		}

		with(HumanMutator()) {
			mutate(entity)
			mutate(enemy)
		}

		// equipment
		// modifiers
	}
}


