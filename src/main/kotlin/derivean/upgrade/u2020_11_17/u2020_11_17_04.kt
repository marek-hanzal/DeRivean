package derivean.upgrade.u2020_11_17

import derivean.server.kingdom.KingdomBuildingCsv
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

@ExperimentalStdlibApi
class u2020_11_17_04(container: IContainer) : AbstractUpgrade(container) {
	private val kingdomBuildingCsv: KingdomBuildingCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			kingdomBuildingCsv.import("upgrade/u2020_11_17/kingdom-buildings.csv")
		}
	}
}
