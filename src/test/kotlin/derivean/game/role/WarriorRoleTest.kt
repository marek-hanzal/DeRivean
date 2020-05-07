package derivean.game.role

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.environment.Battlefield
import org.junit.Test

class WarriorRoleTest {
	@Test
	fun `Warrior should behave like a Warrior`() {
		Battlefield.build {
			relationships.enemies(
				Spirit.build("Gandalf", Entity.build {
				}) {
				},
				Spirit.build("Saruman", Entity.build {
				}) {
				}
			)
		}.let { environment ->
			WarriorRole().let { role ->
				role.act(environment.relationships().spiritBy("Gandalf"), environment)
			}
		}
	}
}
