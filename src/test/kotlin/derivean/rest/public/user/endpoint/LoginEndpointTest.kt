package derivean.rest.public.user.endpoint

import derivean.TestContainer
import derivean.rest.HttpClient
import io.ktor.client.call.*
import io.ktor.client.features.*
import io.ktor.http.*
import io.ktor.util.*
import kotlinx.coroutines.runBlocking
import leight.http.IHttpServer
import leight.rest.ValidationResponse
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

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

	@Test
	fun `Login with bad credentials`() {
		val container = TestContainer.setup()
		val server = container.create(IHttpServer::class)
		server.start("Testing Server", wait = false)
		container.create(HttpClient::class).use { httpClient ->
			assertFailsWith<ClientRequestException> {
				httpClient.post<LoginEndpoint.Response>("/api/public/user/login", LoginEndpoint.Request("kaboom", "kaboom"))
			}.let { exception ->
				assertEquals(HttpStatusCode.Forbidden, exception.response.status)
				runBlocking { exception.response.call.receive<ValidationResponse>() }.let { validationResponse ->
					assertEquals("Login failed!", validationResponse.message)
				}
			}
		}
	}
}
