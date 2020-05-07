package derivean.game.role

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.environment.Battlefield
import derivean.game.selector.LowestHealthSelector
import derivean.game.selector.Selectors
import org.junit.Test

class WarriorRoleTest {
	@Test
	fun `Warrior should behave like a Warrior`() {
		val environment = Battlefield.build {
			relationships.enemies(
				Spirit.build("Gandalf", Entity.build {
				}) {
				},
				Spirit.build("Saruman", Entity.build {
				}) {
				}
			)
		}
		val selectors = Selectors.build {
			selector("lowest-health", LowestHealthSelector())
		}
		val role = WarriorRole(selectors)
		role.act(environment.relationships().spiritBy("Gandalf"), environment)
	}
}
