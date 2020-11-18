package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.checker.AbstractChecker
import leight.container.IContainer

/**
 * Checks if the given building has met production resource requirements.
 *
 * This means:
 * - look into Kingdom
 * - sum production of all buildings
 * - check if the given building does not have missing production requirement (for example gold or something)
 */
class ProductionRequirementChecker(container: IContainer) : AbstractChecker<BuildingEntity>(container) {
	override fun check(item: BuildingEntity): Boolean {
		val kingdom = item.kingdom
		val attributes = kingdom.getProduction().minus(item.getProductionRequirements())
		attributes.forEach {
			it
		}
		return false
	}
}
