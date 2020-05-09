package derivean.game.selector

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits
import derivean.game.role.MageRole
import derivean.game.role.WarriorRole
import org.junit.Test
import kotlin.test.assertEquals

internal class LowestHealthSelectorTest {
	@Test
	fun select() {
		with(LowestHealthSelector()) {
			select(Spirit.build("No One", Entity.build {}) {
				role = WarriorRole(Selectors())
			}, Spirits(
				Spirit("Healthy Spirit", MageRole(Selectors()), Entity.build {
					health = 90.0
				}),
				Spirit("Less Healthy Spirit", MageRole(Selectors()), Entity.build {
					health = 75.2
				}),
				Spirit("Almost dead Spirit", MageRole(Selectors()), Entity.build {
					health = 0.5
				})
			)).let {
				assertEquals(1, it.count())
				assertEquals("Almost dead Spirit", it.list().first().name)
			}
		}
	}
}
