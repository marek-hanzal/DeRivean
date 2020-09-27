package derivean.game.entity

import derivean.game.effect.Effects
import derivean.game.effect.physical.BareHandAttack
import org.junit.Test

class EntityTest {
	@Test
	fun `Common Entity`() {
		val effects = Effects(
			BareHandAttack(),
		)
		val entity = Entity.build {
			attributes {
				set("health" to 100.0)
			}
			abilities(
				effects[BareHandAttack.effect],
			)
		}

//		with(HumanMutator()) {
//			mutate(entity)
//		}

		// equipment
		// modifiers
	}
}
