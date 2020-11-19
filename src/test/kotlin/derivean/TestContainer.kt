package derivean

import derivean.fixtures.Fixtures
import io.ktor.util.*
import leight.http.HttpServerConfig
import leight.upgrade.IUpgradeManager
import kotlin.random.Random

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ServerContainer.create {
		register(HttpServerConfig::class) {
			val port = Random.nextInt(1024, 65535)
			HttpServerConfig(
				port,
				"http://localhost:${port}",
			)
		}
		configurator(IUpgradeManager::class) {
			upgrade(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
