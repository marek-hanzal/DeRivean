package derivean.rest.game.kingdom.endpoint

import derivean.TestContainer
import derivean.rest.HttpServerContext
import derivean.rest.public.user.endpoint.LoginEndpoint
import io.ktor.client.features.*
import io.ktor.http.*
import io.ktor.util.*
import org.junit.Test
import kotlin.test.assertEquals
import kotlin.test.assertFailsWith

@KtorExperimentalAPI
@ExperimentalStdlibApi
class CreateEndpointTest {
	@Test
	fun `Create without logged in user`() {
		TestContainer.setup().create(HttpServerContext::class).use {
			assertFailsWith<ClientRequestException> {
				it.post<FetchMapper.Fetch>("game.kingdom.create", CreateMapper.Request("My Kingdom!"))
			}.also { clientRequestException ->
				assertEquals(HttpStatusCode.Unauthorized, clientRequestException.response.status)
			}
		}
	}

	@Test
	fun `Create with user logged in`() {
		TestContainer.setup().create(HttpServerContext::class).use {
			it.post<LoginEndpoint.Response>("public.user.login", LoginEndpoint.Request("game", "game"))
			it.post<FetchMapper.Fetch>("game.kingdom.create", CreateMapper.Request("My Kingdom!")).let { kingdom ->
				assertEquals("My Kingdom!", kingdom.name)
			}
		}
	}
}
