package leight.http

import leight.config.IConfigurable
import kotlin.reflect.KClass

interface IHttpServer : IConfigurable {
	/**
	 * Add http module to server.
	 */
	fun <TModule : IHttpModule> module(module: KClass<TModule>)

	/**
	 * Start the embedded http server with provided name.
	 *
	 * If wait is true, server will block (thus run as a daemon); on false, it will start, but
	 * not block (thus there must be another application loop keeping it alive).
	 */
	fun start(name: String? = null, wait: Boolean = true)

	/**
	 * If server has been started as non-blocking, this will stop it.
	 */
	fun stop(gracePeriodMillis: Long = 500, timeoutMillis: Long = 1500)
}
