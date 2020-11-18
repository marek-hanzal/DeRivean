package derivean

import com.typesafe.config.ConfigFactory
import derivean.rest.game.GameHttpModule
import derivean.rest.public.PublicHttpModule
import derivean.rest.root.RootHttpModule
import derivean.server.auth.RoleService
import derivean.server.user.SessionValidator
import derivean.upgrade.u2020_11_16.u2020_11_16
import derivean.upgrade.u2020_11_17.*
import io.github.config4k.extract
import io.ktor.util.*
import leight.auth.IRoleService
import leight.container.ContainerFactory
import leight.container.IContainer
import leight.http.HttpServerConfig
import leight.http.IHttpServer
import leight.http.modules.ClientHttpModule
import leight.http.modules.DiscoveryHttpModule
import leight.pool.PoolConfig
import leight.upgrade.IUpgradeManager
import leight.user.ISessionValidator

@KtorExperimentalAPI
@ExperimentalStdlibApi
object ServerContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(ServerConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(ServerConfig::class).pool }
		register(HttpServerConfig::class) { create(ServerConfig::class).httpServer }
		service(IRoleService::class) { RoleService(this) }
		service(ISessionValidator::class) { SessionValidator(this) }
		/**
		 * Common services.
		 */
		configurator(IUpgradeManager::class) {
			register(u2020_11_16::class)
			register(u2020_11_17::class)
			register(u2020_11_17_01::class)
			register(u2020_11_17_02::class)
			register(u2020_11_17_03::class)
			register(u2020_11_17_04::class)
			register(u2020_11_17_05::class)
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
