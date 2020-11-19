package derivean.rest.public.user.endpoint

import derivean.TestContainer
import io.ktor.util.*
import leight.http.IHttpServer
import org.junit.Test

@KtorExperimentalAPI
@ExperimentalStdlibApi
class LoginEndpointTest {
	@Test
	fun `Login with good credentials`() {
		val container = TestContainer.setup()
		val server = container.create(IHttpServer::class)
		server.start("Testing Server", wait = false)
	}
}
