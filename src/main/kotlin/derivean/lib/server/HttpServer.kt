package derivean.lib.server

import derivean.lib.config.AbstractConfigurable
import derivean.lib.container.IContainer
import io.ktor.application.*
import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.http.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import mu.KotlinLogging
import kotlin.reflect.KClass

class HttpServer(container: IContainer) : AbstractConfigurable(), IHttpServer {
	private val httpServerConfig: HttpServerConfig by container.lazy()
	private var modules = arrayOf<KClass<out IHttpModule>>()
	private val logger = KotlinLogging.logger { }
	private lateinit var name: String
	private val server by lazy {
		embeddedServer(Netty, httpServerConfig.port) {
			install(CORS) {
				header("Authorization")
				method(HttpMethod.Head)
				method(HttpMethod.Get)
				method(HttpMethod.Post)
				method(HttpMethod.Delete)
				method(HttpMethod.Put)
				method(HttpMethod.Patch)
				anyHost()
			}
			install(AutoHeadResponse)
			install(ConditionalHeaders)
			install(PartialContent)
			install(Compression) {
				gzip()
			}
			install(DefaultHeaders) {
				header(HttpHeaders.Server, name)
			}
			install(ContentNegotiation) {
				gson {
					setPrettyPrinting()
				}
			}
			modules.forEach {
				logger.debug { "Setup: Installing module [${it.qualifiedName}]" }
				routing {
					container.create(it).install(this)
				}
			}
			if (modules.isEmpty()) {
				logger.warn { "Setup: There are no registered modules!" }
			}
		}
	}

	override fun <TModule : IHttpModule> register(module: KClass<TModule>) {
		modules += module
	}

	override fun start(name: String?) {
		this.name = name ?: "Thor, The Server"
		logger.info { "Start: [${this.name}] Listening on http://0.0.0.0:${httpServerConfig.port} (available on ${httpServerConfig.host})" }
		server.start(wait = true)
	}
}
