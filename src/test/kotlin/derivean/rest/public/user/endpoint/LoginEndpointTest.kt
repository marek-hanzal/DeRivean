package derivean.rest.public.user.endpoint

import derivean.TestContainer
import io.ktor.client.*
import io.ktor.client.request.*
import io.ktor.util.*
import kotlinx.coroutines.runBlocking
import leight.http.IHttpServer
import leight.http.ILinkGenerator
import org.junit.Test
import kotlin.test.assertEquals

@KtorExperimentalAPI
@ExperimentalStdlibApi
class LoginEndpointTest {
	@Test
	fun `Login with good credentials`() {
		val container = TestContainer.setup()
		val server = container.create(IHttpServer::class)
		val linkGenerator = container.create(ILinkGenerator::class)
		server.start("Testing Server", wait = false)
		container.create(HttpClient::class).use {
			runBlocking {
				val login = it.post<LoginEndpoint.Response>(linkGenerator.link("/api/public/user/login")) {
					header("Content-Type", "application/json")
					body = LoginEndpoint.Request("game", "game")
				}
				assertEquals("game", login.login)
				assertEquals("The Gamer", login.name)
				assertEquals("game", login.site)
			}
		}
	}
}
