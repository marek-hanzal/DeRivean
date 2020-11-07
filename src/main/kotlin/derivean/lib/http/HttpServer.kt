package derivean.lib.http

import derivean.lib.config.AbstractConfigurable
import derivean.lib.container.IContainer
import derivean.lib.rest.resolve
import derivean.lib.rest.unauthorized
import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.http.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.sessions.*
import kotlinx.coroutines.delay
import mu.KotlinLogging
import kotlin.random.Random
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
				header(HttpHeaders.XForwardedProto)
				header(HttpHeaders.AccessControlAllowHeaders)
				header(HttpHeaders.ContentType)
				header(HttpHeaders.AccessControlAllowOrigin)
				method(HttpMethod.Options)
				method(HttpMethod.Head)
				method(HttpMethod.Get)
				method(HttpMethod.Post)
				method(HttpMethod.Delete)
				method(HttpMethod.Put)
				method(HttpMethod.Patch)
				anyHost()
			}
			install(SinglePageApplication)
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
			install(Sessions) {
				cookie<UserSession>("user", SessionStorageMemory())
			}
			install(Authentication) {
				session<UserSession> {
					challenge {
						call.resolve(unauthorized("You cannot access this endpoint, I'm sorry about that."))
					}
				}
			}
			/**
			 * Slow server emulation
			 */
			intercept(ApplicationCallPipeline.Features) {
				delay(Random.nextLong(30, 2500))
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

	data class UserSession(
		val id: String,
	)
}
