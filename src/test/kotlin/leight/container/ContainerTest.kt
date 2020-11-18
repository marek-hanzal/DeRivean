package leight.container

import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

class TestService(container: IContainer) : AbstractService(container) {
	fun doSomething() {}
}

class ContainerTest {
	@Test
	fun `Singleton Services`() {
		val container = Container()
		container.service(TestService::class) { TestService(this) }
		assertEquals(container.create(TestService::class), container.create(TestService::class))
	}

	@Test
	fun `Configurator method`() {
		val container = Container()
		container.service(TestService::class) { TestService(this) }
		container.configurator(TestService::class) {
			// just to test right "this" context
			doSomething()
			throw Exception("Configurator executed!")
		}
		assertEquals("Configurator executed!", assertFailsWith<Exception> {
			container.create(TestService::class)
		}.message)
	}
}
