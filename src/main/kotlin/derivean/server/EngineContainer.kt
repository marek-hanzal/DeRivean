package derivean.server

import com.typesafe.config.ConfigFactory
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.pool.PoolConfig
import derivean.lib.server.HttpServerConfig
import derivean.lib.server.IHttpServer
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.config.EngineConfig
import derivean.server.entity.EntityHttpModule
import derivean.server.entity.EntityRepository
import derivean.server.entity.rest.EntityEndpoint
import derivean.server.entity.rest.EntityPageEndpoint
import derivean.server.entity.rest.mapper.EntityFetchMapper
import derivean.server.http.ClientHttpModule
import derivean.server.http.DiscoveryHttpModule
import derivean.server.player.PlayerHttpModule
import derivean.server.player.PlayerRepository
import derivean.server.player.rest.PlayerEndpoint
import derivean.server.player.rest.PlayerPageEndpoint
import derivean.server.player.rest.PlayerPagesEndpoint
import derivean.server.player.rest.mapper.PlayerFetchMapper
import derivean.server.upgrade.u2020_09_25
import derivean.server.upgrade.u2020_10_12
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
		/**
		 * Http Modules
		 */
		register(DiscoveryHttpModule::class) { DiscoveryHttpModule(this) }
		register(ClientHttpModule::class) { ClientHttpModule(this) }
		/**
		 * Player related stuff.
		 */
		register(PlayerHttpModule::class) { PlayerHttpModule(this) }
		register(PlayerPagesEndpoint::class) { PlayerPagesEndpoint(this) }
		register(PlayerPageEndpoint::class) { PlayerPageEndpoint(this) }
		register(PlayerEndpoint::class) { PlayerEndpoint(this) }
		/**
		 * Entity related stuff.
		 */
		register(EntityHttpModule::class) { EntityHttpModule(this) }
		register(EntityPageEndpoint::class) { EntityPageEndpoint(this) }
		register(EntityEndpoint::class) { EntityEndpoint(this) }
		/**
		 * Mappers
		 */
		register(PlayerFetchMapper::class) { PlayerFetchMapper(this) }
		register(EntityFetchMapper::class) { EntityFetchMapper(this) }
		/**
		 * Server-side Services
		 */
		service(PlayerRepository::class) { PlayerRepository(this) }
		service(EntityRepository::class) { EntityRepository(this) }
		configurator(IUpgradeManager::class) {
			register(u2020_09_25::class)
			register(u2020_10_12::class)
		}
		configurator(IHttpServer::class) {
			register(DiscoveryHttpModule::class)
			register(ClientHttpModule::class)
			register(PlayerHttpModule::class)
			register(EntityHttpModule::class)
		}
		block(this)
	}
}
