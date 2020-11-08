package derivean.server

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
import derivean.server.auth.RoleService
import derivean.server.config.EngineConfig
import derivean.server.rest.public.PublicHttpModule
import derivean.server.rest.root.RootHttpModule
import derivean.server.upgrade.u2020_10_21.u2020_10_21
import derivean.server.upgrade.u2020_11_04.u2020_11_04
import derivean.server.upgrade.u2020_11_08.u2020_11_08
import io.github.config4k.extract
import io.ktor.util.*

@KtorExperimentalAPI
@ExperimentalStdlibApi
object EngineContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		register(IRoleService::class) { RoleService(this) }
		/**
		 * Common services.
		 */
		configurator(IUpgradeManager::class) {
			register(u2020_10_21::class)
			register(u2020_11_04::class)
			register(u2020_11_08::class)
		}
		configurator(IHttpServer::class) {
			register(DiscoveryHttpModule::class)
			register(ClientHttpModule::class)
			register(PublicHttpModule::class)
			register(RootHttpModule::class)
		}
		block(this)
	}
}
