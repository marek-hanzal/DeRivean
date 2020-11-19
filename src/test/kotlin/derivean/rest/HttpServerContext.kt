package derivean.rest

import io.ktor.client.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.client.request.*
import io.ktor.http.*
import kotlinx.coroutines.runBlocking
import leight.container.AbstractService
import leight.container.IContainer
import leight.http.IHttpServer
import leight.http.ILinkGenerator
import leight.http.modules.DiscoveryMapper

class HttpServerContext(container: IContainer) : AbstractService(container) {
	private val linkGenerator: ILinkGenerator by container.lazy()
	private val httpServer: IHttpServer by container.lazy()
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
	private val discovery by lazy {
		get<Map<String, DiscoveryMapper.DiscoveryLink>>(linkGenerator.link("/api/discovery"))
	}


	inline fun <reified T> post(url: Url, body: Any) = runBlocking {
		client.post<T>(url) {
			header("Content-Type", "application/json")
			this.body = body
		}
	}

	inline fun <reified T> get(url: Url) = runBlocking {
		client.get<T>(url) {
			header("Content-Type", "application/json")
		}
	}

	inline fun <reified T> post(name: String, body: Any, params: Map<String, Any> = mapOf()) = post<T>(Url(link(name, params)), body)
	inline fun <reified T> get(name: String, params: Map<String, Any> = mapOf()) = get<T>(Url(link(name, params)))

	fun link(name: String, params: Map<String, Any> = mapOf()) = discovery[name]?.link?.let {
		var link = it
		for ((param, value) in params) {
			link = link.replace("{${param}}", value.toString())
		}
		link
	} ?: throw IllegalStateException("Requested name [$name] is not in Discovery Index (thus not supported on API).")

	fun <T> use(block: (HttpServerContext) -> T) {
		httpServer.start("Test Server", wait = false)
		client.use { block(this) }
		httpServer.stop()
	}
}
