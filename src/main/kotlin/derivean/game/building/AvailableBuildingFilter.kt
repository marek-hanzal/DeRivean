package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.container.AbstractService
import leight.container.IContainer

class AvailableBuildingFilter(container: IContainer) : AbstractService(container) {
	private val productionRequirementChecker: ProductionRequirementChecker by container.lazy()
	private val resourceChecker: ResourceChecker by container.lazy()

	fun filter(building: BuildingEntity): Boolean {
		return productionRequirementChecker.check(building) && resourceChecker.check(building)
	}
}
