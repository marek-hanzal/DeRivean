package derivean.upgrade.u2020_11_17

import derivean.server.building.BuildingAttributeCsv
import leight.container.IContainer
import leight.upgrade.AbstractUpgrade

@ExperimentalStdlibApi
class u2020_11_17_05(container: IContainer) : AbstractUpgrade(container) {
	private val buildingAttributeCsv: BuildingAttributeCsv by container.lazy()

	override fun upgrade() {
		storage.write {
			buildingAttributeCsv.import("upgrade/u2020_11_17/building-attributes.csv")
		}
	}
}
