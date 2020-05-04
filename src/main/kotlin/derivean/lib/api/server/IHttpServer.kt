package derivean.lib.api.server

import derivean.lib.api.config.IConfigurable
import kotlin.reflect.KClass

interface IHttpServer : IConfigurable<IHttpServer> {
	fun <TModule : IHttpModule> register(module: KClass<TModule>)

	fun start(name: String? = null)
}
