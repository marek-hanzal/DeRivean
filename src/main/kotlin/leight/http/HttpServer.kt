package leight.http

import io.ktor.application.*
import io.ktor.auth.*
import io.ktor.features.*
import io.ktor.gson.*
import io.ktor.http.*
import io.ktor.routing.*
import io.ktor.server.engine.*
import io.ktor.server.netty.*
import io.ktor.sessions.*
import io.ktor.util.*
import leight.auth.IRoleService
import leight.config.AbstractConfigurable
import leight.container.IContainer
import leight.rest.Response
import leight.rest.resolve
import leight.user.ISessionValidator
import leight.user.SessionTicket
import mu.KotlinLogging
import java.util.*
import kotlin.reflect.KClass

@KtorExperimentalAPI
class HttpServer(container: IContainer) : AbstractConfigurable(), IHttpServer {
	private val httpServerConfig: HttpServerConfig by container.lazy()
	private val sessionValidator: ISessionValidator by container.lazy()
	private val roleService: IRoleService by container.lazy()
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
			install(ForwardedHeaderSupport)
			install(SinglePageApplication)
			install(AutoHeadResponse)
			install(ConditionalHeaders)
			install(PartialContent)
			install(RoleBasedAuthorization) {
				getRoles { roleService.rolesFor((it as SessionTicket).id) }
			}
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
				cookie<SessionTicket>("ticket") {
					cookie.extensions["SameSite"] = "Strict"
					cookie.maxAgeInSeconds = 60 * 60
					cookie.encoding = CookieEncoding.DQUOTES
					this.serializer = object : SessionSerializer<SessionTicket> {
						override fun deserialize(text: String) = SessionTicket(UUID.fromString(text))

						override fun serialize(session: SessionTicket) = session.id.toString()
					}
				}
			}
			install(Authentication) {
				session<SessionTicket> {
					validate { sessionTicket: SessionTicket ->
						sessionValidator.validate(sessionTicket)
					}
					challenge {
						call.resolve(Response(HttpStatusCode.Unauthorized, "You cannot access this endpoint, I'm sorry about that."))
					}
				}
			}
			/**
			 * Slow server emulation
			 */
//			intercept(ApplicationCallPipeline.Features) {
//				delay(Random.nextLong(250, 850))
//			}
			modules.distinctBy { it.qualifiedName }.forEach {
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

	override fun <TModule : IHttpModule> module(module: KClass<TModule>) {
		modules += module
	}

	override fun start(name: String?, wait: Boolean) {
		this.name = name ?: "Thor, The Server"
		logger.info { "Start: [${this.name}] Listening on http://0.0.0.0:${httpServerConfig.port} (available on ${httpServerConfig.host})" }
		server.start(wait)
	}

	override fun stop(gracePeriodMillis: Long, timeoutMillis: Long) {
		server.stop(gracePeriodMillis, timeoutMillis)
	}
}
