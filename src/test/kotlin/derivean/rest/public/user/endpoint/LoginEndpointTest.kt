package derivean.rest.public.user.endpoint

import derivean.TestContainer
import derivean.rest.HttpServerContext
import io.ktor.client.call.*
import io.ktor.client.features.*
import io.ktor.http.*
import io.ktor.util.*
import kotlinx.coroutines.runBlocking
import leight.rest.ValidationResponse
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@KtorExperimentalAPI
@ExperimentalStdlibApi
class LoginEndpointTest {
	@Test
	fun `Login with good credentials`() {
		TestContainer.setup().create(HttpServerContext::class).use {
			it.post<LoginEndpoint.Response>("public.user.login", LoginEndpoint.Request("game", "game")).let { login ->
				assertEquals("game", login.login)
				assertEquals("The Gamer", login.name)
				assertEquals("game", login.site)
			}
		}
	}

	@Test
	fun `Login with bad credentials`() {
		TestContainer.setup().create(HttpServerContext::class).use {
			assertFailsWith<ClientRequestException> {
				it.post<LoginEndpoint.Response>("public.user.login", LoginEndpoint.Request("kaboom", "kaboom"))
			}.let { exception ->
				assertEquals(HttpStatusCode.Forbidden, exception.response.status)
				runBlocking { exception.response.call.receive<ValidationResponse>() }.let { validationResponse ->
					assertEquals("Login failed!", validationResponse.message)
				}
			}
		}
	}
}
