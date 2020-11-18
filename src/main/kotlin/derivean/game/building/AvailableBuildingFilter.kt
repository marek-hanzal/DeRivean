package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.container.AbstractService
import leight.container.IContainer

class AvailableBuildingFilter(container: IContainer) : AbstractService(container) {
	fun filter(building: BuildingEntity): Boolean {
		val kingdom = building.kingdom
		kingdom.getResources()
		kingdom.getProduction()
		building.getProductionRequirements()

		return false
	}
}
