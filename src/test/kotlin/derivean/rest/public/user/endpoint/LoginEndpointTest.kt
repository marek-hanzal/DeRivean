package derivean.rest.public.user.endpoint

import derivean.TestContainer
import derivean.rest.HttpClient
import io.ktor.util.*
import leight.http.IHttpServer
import org.junit.Test
import kotlin.test.assertEquals

@KtorExperimentalAPI
@ExperimentalStdlibApi
class LoginEndpointTest {
	@Test
	fun `Login with good credentials`() {
		val container = TestContainer.setup()
		val server = container.create(IHttpServer::class)
		server.start("Testing Server", wait = false)
		container.create(HttpClient::class).use { httpClient ->
			httpClient.post<LoginEndpoint.Response>("/api/public/user/login", LoginEndpoint.Request("game", "game")).let { login ->
				assertEquals("game", login.login)
				assertEquals("The Gamer", login.name)
				assertEquals("game", login.site)
			}
		}
	}
}
