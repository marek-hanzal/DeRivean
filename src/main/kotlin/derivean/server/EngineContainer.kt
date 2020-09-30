package derivean.server

import com.typesafe.config.ConfigFactory
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.pool.PoolConfig
import derivean.lib.server.HttpServerConfig
import derivean.lib.server.IHttpServer
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.config.EngineConfig
import derivean.server.upgrade.u2020_09_25
import io.github.config4k.extract
import kotlin.time.ExperimentalTime

@ExperimentalTime
object EngineContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		configurator(IHttpServer::class) {
		}
		configurator(IUpgradeManager::class) {
			register(u2020_09_25::class)
		}
		block(this)
	}
}
