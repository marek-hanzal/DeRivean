package derivean.game.ability.physical

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
				attribute("health", 25)
				attribute("attack/physical", 12.5)
				attribute("attack/magical", 10)
				attribute("defense/physical", 6)
			}) { }
			val saruman = Spirit.build("Saruman", Entity.build {
				attribute("health", 40)
				attribute("attack/physical", 10)
				attribute("attack/magical", 10)
				attribute("defense/physical", 4.5)
			}) { }
			val badGuy = Spirit.build("Bad Guy", Entity.build {
				attribute("health", 41)
			}) {
			}
			val selector = LowestHealthSelector()
			val relationships = Relationships()
			relationships.enemies(aragorn, saruman)
			relationships.enemies(aragorn, badGuy)
			with(use(aragorn, selector.select(aragorn, relationships.enemiesOf(aragorn)))) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { attribute("health", -8) })
					assertEquals("Saruman", getSpirit().name)
				}
				assertEquals(32.0, saruman.entity.attributes.get("health"))
			}
			/**
			 * heal saruman a bit to force Aragorn to attack on Bad Guy
			 */
			saruman.entity.attributes.inc(" health", 10.0)
			with(use(saruman, selector.select(saruman, relationships.enemiesOf(saruman)))) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { attribute("health", -4) })
					assertEquals("Aragorn", getSpirit().name)
				}
				assertEquals(21.0, aragorn.entity.attributes.get("health"))
			}
			with(use(aragorn, selector.select(aragorn, relationships.enemiesOf(aragorn)))) {
				assertEquals(1, count())
				with(first()) {
					apply()
					assertEquals(getEffect(), Entity.build { attribute("health", -12.5) })
					assertEquals("Bad Guy", getSpirit().name)
				}
				assertEquals(28.5, badGuy.entity.attributes.get("health"))
			}
		}
	}
}
