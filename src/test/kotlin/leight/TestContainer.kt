package leight

import io.ktor.util.*
import leight.container.ContainerFactory
import leight.fixtures.Fixtures
import leight.pool.PoolConfig
import leight.upgrade.IUpgradeManager

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ContainerFactory.container().apply {
		register(PoolConfig::class) { PoolConfig("jdbc:h2:mem:leight", "leight", "leight") }
		configurator(IUpgradeManager::class) {
			upgrade(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
