package derivean.rest.game.building.endpoint

import derivean.TestContainer
import derivean.rest.HttpServerContext
import derivean.rest.game.kingdom.endpoint.CreateMapper
import derivean.rest.game.kingdom.endpoint.FetchMapper
import derivean.rest.public.user.endpoint.LoginEndpoint
import io.ktor.util.*
import leight.rest.page.PageIndex
import org.junit.Test
import kotlin.test.assertEquals

@KtorExperimentalAPI
@ExperimentalStdlibApi
class PageEndpointTest {
	@Test
	fun `Test client-side filtering`() {
		TestContainer.setup().create(HttpServerContext::class).use {
			it.post<LoginEndpoint.Response>("public.user.login", LoginEndpoint.Request("game", "game"))
			it.post<FetchMapper.Fetch>("game.kingdom.create", CreateMapper.Request("My Kingdom!")).let { kingdom ->
				it.get<PageIndex<derivean.rest.game.building.endpoint.FetchMapper.Fetch>>("game.kingdom.building.page", mapOf("kingdom" to kingdom.id, "page" to 0)).let { buildings ->
					assertEquals(2, buildings.total)
					assertEquals(2, buildings.count)
				}
			}
		}
	}
}
