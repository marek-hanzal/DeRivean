package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.checker.AbstractChecker
import leight.container.IContainer

class ResourceChecker(container: IContainer) : AbstractChecker<BuildingEntity>(container) {
	override fun check(item: BuildingEntity) = item.kingdom.getResources().decBy(item.getCost()).filter { it.value < 0 }.isEmpty()
}
