package derivean

import derivean.fixtures.Fixtures
import io.ktor.client.*
import io.ktor.client.features.cookies.*
import io.ktor.client.features.json.*
import io.ktor.util.*
import leight.upgrade.IUpgradeManager

@KtorExperimentalAPI
@ExperimentalStdlibApi
object TestContainer {
	fun setup() = ServerContainer.create {
		register(HttpClient::class) {
			HttpClient {
				install(HttpCookies) {
					storage = AcceptAllCookiesStorage()
				}
				install(JsonFeature) {
					serializer = GsonSerializer {}
				}
			}
		}
		configurator(IUpgradeManager::class) {
			upgrade(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}
}
