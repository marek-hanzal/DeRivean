package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.checker.AbstractChecker
import leight.container.IContainer

class AvailableChecker(container: IContainer) : AbstractChecker<BuildingEntity>(container) {
	private val productionRequirementChecker: ProductionRequirementChecker by container.lazy()
	private val resourceChecker: ResourceChecker by container.lazy()

	override fun check(item: BuildingEntity) = productionRequirementChecker.check(item) && resourceChecker.check(item)
}
