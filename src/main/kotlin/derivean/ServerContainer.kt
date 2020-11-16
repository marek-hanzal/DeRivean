package derivean

import com.typesafe.config.ConfigFactory
import derivean.lib.auth.IRoleService
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.http.HttpServerConfig
import derivean.lib.http.IHttpServer
import derivean.lib.http.modules.ClientHttpModule
import derivean.lib.http.modules.DiscoveryHttpModule
import derivean.lib.pool.PoolConfig
import derivean.lib.upgrade.IUpgradeManager
import derivean.rest.game.GameHttpModule
import derivean.rest.public.PublicHttpModule
import derivean.rest.root.RootHttpModule
import derivean.server.auth.RoleService
import derivean.server.config.EngineConfig
import derivean.server.upgrade.u2020_11_16.u2020_11_16
import io.github.config4k.extract
import io.ktor.util.*

@KtorExperimentalAPI
@ExperimentalStdlibApi
object ServerContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		service(IRoleService::class) { RoleService(this) }
		/**
		 * Common services.
		 */
		configurator(IUpgradeManager::class) {
			register(u2020_11_16::class)
		}
		configurator(IHttpServer::class) {
			register(DiscoveryHttpModule::class)
			register(ClientHttpModule::class)
			register(PublicHttpModule::class)
			register(GameHttpModule::class)
			register(RootHttpModule::class)
		}
		block(this)
	}
}
