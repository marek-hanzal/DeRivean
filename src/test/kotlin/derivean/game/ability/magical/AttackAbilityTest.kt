package derivean.game.ability.magical

import derivean.game.entity.Entity
import derivean.game.entity.Relationships
import derivean.game.entity.Spirit
import derivean.game.selector.LowestHealthSelector
import org.junit.Test
import kotlin.test.assertEquals

class AttackAbilityTest {
	@Test
	fun `A Spirit use attack ability on another Spirit`() {
		with(AttackAbility()) {
			val aragorn = Spirit.build("Aragorn", Entity.build {
				health = 25.0
				defense {
					magical = 1.5
				}
			}) {
			}
			val saruman = Spirit.build("Saruman", Entity.build {
				health = 40.0
				attack {
					magical = 4.5
				}
			}) {
			}
			val selector = LowestHealthSelector()
			val relationships = Relationships()
			relationships.enemies(aragorn, saruman)
			with(use(saruman, selector.select(saruman, relationships.enemiesOf(saruman)))) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { health = -3.0 })
					assertEquals("Aragorn", getSpirit().name)
				}
				assertEquals(22.0, aragorn.entity.health)
			}
			with(use(aragorn, selector.select(aragorn, relationships.enemiesOf(aragorn)))) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { })
					assertEquals("Saruman", getSpirit().name)
				}
				assertEquals(40.0, saruman.entity.health)
			}
		}
	}
}
