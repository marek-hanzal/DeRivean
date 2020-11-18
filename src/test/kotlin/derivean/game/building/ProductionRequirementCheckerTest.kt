package derivean.game.building

import derivean.ServerContainer
import derivean.server.kingdom.KingdomAttributeCsv
import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import io.ktor.util.*
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade
import leight.upgrade.IUpgradeManager
import org.junit.Test

@KtorExperimentalAPI
@ExperimentalStdlibApi
class ProductionRequirementCheckerTest {
	private fun setup() = ServerContainer.create {
		register(Fixtures::class) {
			Fixtures(this)
		}
		configurator(IUpgradeManager::class) {
			register(Fixtures::class)
		}
		create(IUpgradeManager::class).upgrade()
	}


	@Test
	fun `Production requirement`() {
		val container = setup()
	}
}

@ExperimentalStdlibApi
class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val kingdomAttributeCsv: KingdomAttributeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			kingdomRepository.create {
				this.user = userRepository.findByLogin("template")
				this.name = "test"
			}
			kingdomAttributeCsv.import("fixtures/kingdom-attributes.csv")
		}
	}
}
