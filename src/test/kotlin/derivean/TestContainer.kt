package derivean

import derivean.fixtures.Fixtures
import io.ktor.util.*
import leight.upgrade.IUpgradeManager

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ServerContainer.create {
		configurator(IUpgradeManager::class) {
			upgrade(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
