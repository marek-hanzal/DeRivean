package derivean.server

import com.typesafe.config.ConfigFactory
import derivean.lib.container.ContainerFactory
import derivean.lib.container.IContainer
import derivean.lib.pool.PoolConfig
import derivean.lib.upgrade.AbstractUpgrade
import derivean.lib.upgrade.IUpgradeManager
import derivean.server.config.EngineConfig
import derivean.server.upgrade.u2020_09_25
import io.github.config4k.extract
import org.junit.Test
import kotlin.time.ExperimentalTime

@ExperimentalTime
class CommonTest {
	private fun setup() = ContainerFactory.container().apply {
		register(EngineConfig::class) { ConfigFactory.load().extract("derivean") }
		register(PoolConfig::class) { create(EngineConfig::class).pool }
		configurator(IUpgradeManager::class) {
			register(u2020_09_25::class)
			register(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}

	@Test
	fun `Entity from database`() {
		val container = setup()
	}
}

class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	override fun upgrade() {
		storage.transaction {
//			Entity.new {
//			}
		}
	}
}
