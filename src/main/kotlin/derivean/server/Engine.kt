package derivean.server

import derivean.lib.container.IContainer
import derivean.lib.http.IHttpServer
import derivean.lib.upgrade.IUpgradeManager
import derivean.lib.upgrade.IVersionService
import derivean.lib.utils.asStamp
import derivean.server.config.EngineConfig
import io.ktor.util.*
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
			versionService.getCollection().toList().asReversed().apply {
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

@KtorExperimentalAPI
@ExperimentalStdlibApi
@ExperimentalTime
fun main() {
	EngineContainer.create {
		register(Engine::class) { Engine(this) }
		create(Engine::class).run()
	}
}
