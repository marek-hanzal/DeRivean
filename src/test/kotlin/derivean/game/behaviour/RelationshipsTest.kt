package derivean.game.behaviour

import derivean.game.entity.Entity
import derivean.game.entity.Spirit
import derivean.game.entity.Spirits
import org.junit.Test
import kotlin.test.assertEquals

class RelationshipsTest {
	@Test
	fun `List of known Spirits`() {
		with(Relationships(Spirits())) {
			enemies(Spirit(Entity.build {}), Spirit(Entity.build {}))
			assertEquals(2, spirits.list().count(), "There are more spirits, than expected!")
		}
	}

	@Test
	fun `Query for a Relations`() {
		with(Relationships()) {
			val gandalf = Spirit(Entity.build {})
			val saruman = Spirit(Entity.build {})
			val frodo = Spirit(Entity.build {})
			val aragorn = Spirit(Entity.build {})

			/**
			 * gandalf treats saruman as an enemy
			 */
			enemyOf(gandalf, saruman)
			enemies(aragorn, saruman)
			/**
			 * but saruman treats gandalf as a friend
			 */
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
