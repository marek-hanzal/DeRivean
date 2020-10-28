package derivean.server

import com.typesafe.config.ConfigFactory
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.http.HttpServerConfig
import derivean.lib.http.IHttpServer
import derivean.lib.http.modules.ClientHttpModule
import derivean.lib.http.modules.DiscoveryHttpModule
import derivean.lib.pool.PoolConfig
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.config.EngineConfig
import derivean.server.rest.public.user.PublicUserHttpModule
import derivean.server.rest.root.entity.EntityHttpModule
import derivean.server.rest.root.kingdom.KingdomHttpModule
import derivean.server.rest.root.user.RootUserHttpModule
import derivean.server.upgrade.u2020_10_21.u2020_10_21
import io.github.config4k.extract

object EngineContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		/**
		 * Common services.
		 */
		configurator(IUpgradeManager::class) {
//			register(u2020_09_25::class)
//			register(u2020_10_12::class)
//			register(u2020_10_17::class)
//			register(u2020_10_19::class)
//			register(u2020_10_19_01::class)
//			register(u2020_10_19_02::class)
//			register(u2020_10_19_03::class)
//			register(u2020_10_19_04::class)
//			register(u2020_10_20::class)
			register(u2020_10_21::class)
		}
		configurator(IHttpServer::class) {
			register(DiscoveryHttpModule::class)
			register(ClientHttpModule::class)
			register(EntityHttpModule::class)
			register(PublicUserHttpModule::class)
			register(RootUserHttpModule::class)
			register(KingdomHttpModule::class)
		}
		block(this)
	}
}
