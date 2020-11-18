package derivean.fixtures

import derivean.server.building.BuildingAttributeCsv
import derivean.server.kingdom.KingdomAttributeCsv
import derivean.server.kingdom.KingdomBuildingCsv
import derivean.storage.repository.KingdomRepository
import derivean.storage.repository.UserRepository
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

@ExperimentalStdlibApi
class Fixtures(container: IContainer) : AbstractUpgrade(container) {
	private val userRepository: UserRepository by container.lazy()
	private val kingdomRepository: KingdomRepository by container.lazy()
	private val kingdomAttributeCsv: KingdomAttributeCsv by container.lazy()
	private val kingdomBuildingCsv: KingdomBuildingCsv by container.lazy()
	private val buildingAttributeCsv: BuildingAttributeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			kingdomRepository.create {
				this.user = userRepository.findByLogin("template")
				this.name = "test"
			}
		}
		storage.write {
			kingdomAttributeCsv.import("fixtures/kingdom-attributes.csv")
		}
		storage.write {
			kingdomBuildingCsv.import("fixtures/kingdom-buildings.csv")
		}
		storage.write {
			buildingAttributeCsv.import("fixtures/building-attributes.csv")
		}
	}
}

