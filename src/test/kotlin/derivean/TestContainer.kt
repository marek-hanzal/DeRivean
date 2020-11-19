package derivean

import derivean.fixtures.Fixtures
import derivean.rest.HttpClient
import io.ktor.util.*
import leight.upgrade.IUpgradeManager

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ServerContainer.create {
		register(HttpClient::class) { HttpClient(this) }
		configurator(IUpgradeManager::class) {
			upgrade(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
