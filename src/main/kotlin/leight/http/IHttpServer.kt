package leight.http

import leight.config.IConfigurable
import kotlin.reflect.KClass

interface IHttpServer : IConfigurable {
	fun <TModule : IHttpModule> register(module: KClass<TModule>)

	fun start(name: String? = null)
}
