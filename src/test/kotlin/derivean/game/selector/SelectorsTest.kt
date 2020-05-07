package derivean.game.selector

import org.junit.Test
import kotlin.test.assertEquals

internal class SelectorsTest {
	@Test
	fun add() {
		with(Selectors(selectors)) {
			LowestHealthSelector().let {
				add("lowest-health", it)
				assertEquals(it, selector("lowest-health"))
			}
		}
	}
}
