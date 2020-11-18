package derivean

import derivean.fixtures.Fixtures
import io.ktor.util.*
import leight.upgrade.IUpgradeManager

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ServerContainer.create {
		register(Fixtures::class) {
			Fixtures(this)
		}
		configurator(IUpgradeManager::class) {
			register(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
