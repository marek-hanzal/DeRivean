package derivean.game.strategy

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.environment.Battlefield
import derivean.game.role.MageRole
import derivean.game.role.WarriorRole
import derivean.game.selector.LowestHealthSelector
import derivean.game.selector.RandomSelector
import derivean.game.selector.Selectors
import org.junit.Test

internal class AttackStrategyTest {
	@Test
	fun `Attack Strategy`() {
		val selectors = Selectors.build {
			selector("random", RandomSelector())
			selector("lowest-health", LowestHealthSelector())
		}
		val environment = Battlefield.build {
			spirit(Spirit.build("Aragorn", Entity.build {
				attribute("health", 40)
				attribute("attack.physical", 4.0)
				attribute("defense.physical", 2.0)
				attribute("defense.magical", 1.0)
			}) {
				role = WarriorRole(selectors)
			})
			spirit(Spirit.build("Saruman", Entity.build {
				attribute("health", 60)
				attribute("attack.physical", 5.0)
				attribute("attack.physical", 6.0)
				attribute("defense.physical", 3.0)
				attribute("defense.magical", 2.5)
			}) {
				role = MageRole(selectors)
			})
			relationships.enemies("Aragorn", "Saruman")
		}
		val strategy = AttackStrategy(selectors)
		strategy.use("Aragorn", environment)
	}
}
