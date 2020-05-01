package derivean

import kotlin.test.Test
import kotlin.test.assertNotNull

class EngineTest {
	@Test
	fun testAppHasAGreeting() {
		val classUnderTest = Engine()
		assertNotNull(classUnderTest.greeting, "app should have a greeting")
	}
}
