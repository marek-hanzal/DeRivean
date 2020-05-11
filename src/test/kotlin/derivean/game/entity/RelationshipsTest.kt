package derivean.game.entity

import derivean.game.role.MageRole
import derivean.game.role.WarriorRole
import derivean.game.selector.Selectors
import org.junit.Test
import kotlin.test.assertEquals

class RelationshipsTest {
	@Test
	fun `List of known Spirits`() {
		with(Relationships(Spirits())) {
			enemies(Spirit("Gandalf", MageRole(Selectors()), Entity.build {}), Spirit("Saruman", MageRole(Selectors()), Entity.build {}))
			assertEquals(2, spirits.list().count(), "There are more spirits, than expected!")
		}
	}

	@Test
	fun `Simple enemy relation`() {
		val gandalf = Spirit("Gandalf", MageRole(Selectors()), Entity.build {})
		val saruman = Spirit("Saruman", MageRole(Selectors()), Entity.build {})
		with(Relationships()) {
			enemies(gandalf, saruman)
			assertEquals(listOf(gandalf, saruman), spirits.list())
			assertEquals(listOf(saruman), enemiesOf(gandalf).list())
			assertEquals(listOf(gandalf), enemiesOf(saruman).list())
			gandalf.entity += Entity.build { attributes.inc("health", 5) }
			assertEquals(listOf(saruman), enemiesOf(gandalf).list())
			assertEquals(listOf(gandalf), enemiesOf(saruman).list())
		}
	}

	@Test
	fun `Query for a Relations`() {
		with(Relationships()) {
			val gandalf = Spirit("Gandalf", MageRole(Selectors()), Entity.build {})
			val saruman = Spirit("Saruman", MageRole(Selectors()), Entity.build {})
			val frodo = Spirit("Frodo", WarriorRole(Selectors()), Entity.build {})
			val aragorn = Spirit("Aragorn", WarriorRole(Selectors()), Entity.build {})

			enemyOf(gandalf, saruman)
			enemies(aragorn, saruman)
			friendOf(saruman, gandalf)
			enemies(frodo, saruman)
			friends(frodo, gandalf)
			friends(frodo, aragorn)
			friends(gandalf, aragorn)

			assertEquals(listOf(gandalf, aragorn), friendsOf(frodo).list())
			assertEquals(listOf(saruman), enemiesOf(frodo).list())
			assertEquals(listOf(gandalf), friendsOf(saruman).list())
			assertEquals(listOf(aragorn, frodo), enemiesOf(saruman).list())
			assertEquals(listOf(aragorn, frodo), friendsOf(gandalf).list())
		}
	}
}
