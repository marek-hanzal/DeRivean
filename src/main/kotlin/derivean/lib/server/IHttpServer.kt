package derivean.lib.server

import derivean.lib.config.IConfigurable
import kotlin.reflect.KClass

interface IHttpServer : IConfigurable<IHttpServer> {
	fun <TModule : IHttpModule> register(module: KClass<TModule>)

	fun start(name: String? = null)
}
