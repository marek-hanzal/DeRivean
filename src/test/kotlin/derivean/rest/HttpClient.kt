package derivean.rest

import io.ktor.client.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import kotlinx.coroutines.runBlocking
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.ILinkGenerator

class HttpClient(container: IContainer) : AbstractService(container) {
	val linkGenerator: ILinkGenerator by container.lazy()
	val client by lazy {
		HttpClient {
			install(HttpCookies) {
				storage = AcceptAllCookiesStorage()
			}
			install(JsonFeature) {
				serializer = GsonSerializer {}
			}
		}
	}

	inline fun <reified T> post(path: String, body: Any) = runBlocking {
		client.post<T>(linkGenerator.link(path)) {
			header("Content-Type", "application/json")
			this.body = body
		}
	}

	fun <T> use(block: (HttpClient) -> T) = client.use {
		block(this)
	}
}
