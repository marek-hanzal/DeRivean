package derivean.server.upgrade.u2020_11_17

import derivean.lib.container.IContainer
import derivean.lib.upgrade.AbstractUpgrade
import derivean.server.kingdom.KingdomBuildingCsv
import derivean.server.upgrade.u2020_11_16.storage.entities.BuildingEntity
import derivean.server.upgrade.u2020_11_16.storage.repository.KingdomRepository

@ExperimentalStdlibApi
class u2020_11_17_04(container: IContainer) : AbstractUpgrade(container) {
	private val kingdomRepository: KingdomRepository by container.lazy()

	override fun upgrade() {
		storage.write {
			KingdomBuildingCsv.load("upgrade/u2020_11_17/kingdom-buildings.csv").forEach {
				BuildingEntity.new {
					this.kingdom = kingdomRepository.findByName(it.kingdom)
					this.user = this.kingdom.user
					this.name = it.name
					this.description = it.description
				}
			}
		}
	}
}
