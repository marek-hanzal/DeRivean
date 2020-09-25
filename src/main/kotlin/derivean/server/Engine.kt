package derivean.server

import com.typesafe.config.ConfigFactory
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.pool.PoolConfig
import derivean.lib.server.HttpServerConfig
import derivean.lib.server.IHttpServer
import derivean.lib.upgrade.IUpgradeManager
import derivean.lib.upgrade.IVersionService
import derivean.lib.utils.asStamp
import derivean.server.config.EngineConfig
import derivean.server.upgrade.u2020_09_25
import io.github.config4k.extract
import mu.KotlinLogging
import kotlin.system.measureTimeMillis
import kotlin.time.ExperimentalTime

class Engine(container: IContainer) {
	private val engineConfig: EngineConfig by container.lazy()
	private val upgradeManager: IUpgradeManager by container.lazy()
	private val versionService: IVersionService by container.lazy()
	private val httpServer: IHttpServer by container.lazy()
	private val logger = KotlinLogging.logger {}

	fun run() {
		measureTimeMillis {
			logger.info { "Starting DeRivean Server: version: ${engineConfig.version}, upgrade: [${versionService.getVersion()}]" }
			versionService.getCollection().toList().apply {
				logger.info { if (count() > 0) "Installed upgrades:" else "Initial application state" }
			}.forEach {
				logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
			}
			if (upgradeManager.upgrade() > 0) {
				logger.info { "Installed upgrades:" }
				versionService.getCollection().forEach {
					logger.info { "\t\tstamp: [${it.stamp.asStamp()}], version: [${it.version}]" }
				}
			}
		}.also {
			logger.info { "Boobstrap time ${it}ms" }
		}
		httpServer.start("DeRivean Server [${engineConfig.version}]")
	}
}

@ExperimentalTime
fun main() {
	ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		register(HttpServerConfig::class) { create(EngineConfig::class).httpServer }
		configurator(IHttpServer::class) {
		}
		configurator(IUpgradeManager::class) {
			register(u2020_09_25::class)
		}
		create(Engine::class).run()
	}
}
