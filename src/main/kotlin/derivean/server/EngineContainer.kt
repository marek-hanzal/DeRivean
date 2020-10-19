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
import derivean.server.auth.AuthenticatorService
import derivean.server.config.EngineConfig
import derivean.server.entity.EntityHttpModule
import derivean.server.entity.EntityRepository
import derivean.server.entity.rest.EntityEndpoint
import derivean.server.entity.rest.EntityPageEndpoint
import derivean.server.entity.rest.mapper.EntityFetchMapper
import derivean.server.player.PlayerHttpModule
import derivean.server.player.PlayerRepository
import derivean.server.player.rest.PlayerEndpoint
import derivean.server.player.rest.PlayerFixturesEndpoint
import derivean.server.player.rest.PlayerPageEndpoint
import derivean.server.player.rest.mapper.PlayerFetchMapper
import derivean.server.upgrade.u2020_09_25
import derivean.server.upgrade.u2020_10_12
import derivean.server.upgrade.u2020_10_17
import derivean.server.user.UserHttpModule
import derivean.server.user.UserRepository
import derivean.server.user.rest.UserCreateEndpoint
import derivean.server.user.rest.mapper.UserCreateMapper
import io.github.config4k.extract

object EngineContainer {
	fun create(block: IContainer.() -> Unit) = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		/**
		 * Upgrades
		 */
		register(u2020_09_25::class) { u2020_09_25(this) }
		register(u2020_10_12::class) { u2020_10_12(this) }
		register(u2020_10_17::class) { u2020_10_17(this) }
		/**
		 * Http Modules
		 */
		service(DiscoveryHttpModule::class) { DiscoveryHttpModule(this) }
		service(ClientHttpModule::class) { ClientHttpModule(this) }
		/**
		 * Player related stuff.
		 */
		service(PlayerHttpModule::class) { PlayerHttpModule(this) }
		service(PlayerPageEndpoint::class) { PlayerPageEndpoint(this) }
		service(PlayerEndpoint::class) { PlayerEndpoint(this) }
		service(PlayerFixturesEndpoint::class) { PlayerFixturesEndpoint(this) }
		service(PlayerRepository::class) { PlayerRepository(this) }
		/**
		 * Entity related stuff.
		 */
		service(EntityHttpModule::class) { EntityHttpModule(this) }
		service(EntityPageEndpoint::class) { EntityPageEndpoint(this) }
		service(EntityEndpoint::class) { EntityEndpoint(this) }
		service(EntityRepository::class) { EntityRepository(this) }
		/**
		 * User related stuff.
		 */
		service(UserHttpModule::class) { UserHttpModule(this) }
		service(UserCreateEndpoint::class) { UserCreateEndpoint(this) }
		service(UserCreateMapper::class) { UserCreateMapper(this) }
		service(UserRepository::class) { UserRepository(this) }
		/**
		 * Mappers
		 */
		service(PlayerFetchMapper::class) { PlayerFetchMapper(this) }
		service(EntityFetchMapper::class) { EntityFetchMapper(this) }
		/**
		 * Common services.
		 */
		service(AuthenticatorService::class) { AuthenticatorService(this) }
		configurator(IUpgradeManager::class) {
			register(u2020_09_25::class)
			register(u2020_10_12::class)
			register(u2020_10_17::class)
		}
		configurator(IHttpServer::class) {
			register(DiscoveryHttpModule::class)
			register(ClientHttpModule::class)
			register(PlayerHttpModule::class)
			register(EntityHttpModule::class)
			register(UserHttpModule::class)
		}
		block(this)
	}
}
