package derivean.game.entity

import derivean.game.ability.Abilities
import derivean.game.attribute.common.health
import derivean.game.attribute.common.maxHealth
import derivean.game.effect.physical.BareHandAttack
import derivean.game.effect.physical.ability
import org.junit.Test

class EntityTest {
	@Test
	fun `Common Entity`() {
		val abilities = Abilities(
			BareHandAttack().ability("attack.bare-hand"),
		)

		val entity = Entity.build {
			attributes(
				100.0.health(),
				100.0.maxHealth(),
			)
			abilities(
				abilities["attack.bare-hand"],
			)
		}

//		with(HumanMutator()) {
//			mutate(entity)
//		}

		// equipment
		// modifiers
	}
}
