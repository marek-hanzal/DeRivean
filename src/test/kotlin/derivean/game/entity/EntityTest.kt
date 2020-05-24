package derivean.game.entity

import org.junit.Test

class EntityTest {
	@Test
	fun `Common Entity`() {
		val aragorn = Entity.build {
			attribute("health", 25)
		}
		val saruman = Entity.build {
			attribute("health", 30)
		}

//		aragorn.interact("attack").with(saruman)
	}
}
