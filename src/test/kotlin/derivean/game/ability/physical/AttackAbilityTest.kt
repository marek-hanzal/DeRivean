package derivean.game.ability.physical

import derivean.game.entity.Entity
import derivean.game.entity.Relationships
import derivean.game.entity.Spirit
import org.junit.Test
import kotlin.test.assertEquals

class AttackAbilityTest {
	@Test
	fun `A Spirit use attack ability on another Spirit`() {
		with(AttackAbility("attack", "Do a physical attack.")) {
			val aragorn = Spirit.build("Aragorn", Entity.build {
				health = 25.0
				attack {
					physical = 12.5
					magical = 10.0
				}
				defense {
					physical = 6.0
				}
			}) {
			}
			val saruman = Spirit.build("Saruman", Entity.build {
				health = 40.0
				attack {
					physical = 10.0
					magical = 10.0
				}
				defense {
					physical = 4.5
				}
			}) {
			}
			val relationships = Relationships()
			relationships.enemies(aragorn, saruman)
			with(use(aragorn, relationships)) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { health = -8.0 })
					assertEquals("Saruman", getSpirit().name)
				}
				assertEquals(32.0, saruman.entity.health)
			}
			with(use(saruman, relationships)) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { health = -4.0 })
					assertEquals("Aragorn", getSpirit().name)
				}
				assertEquals(21.0, aragorn.entity.health)
			}
			with(use(aragorn, relationships)) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { health = -8.0 })
					assertEquals("Saruman", getSpirit().name)
				}
				assertEquals(24.0, saruman.entity.health)
			}
		}
	}
}
