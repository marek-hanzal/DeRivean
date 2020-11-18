package derivean.game.building

import derivean.storage.entities.BuildingEntity
import leight.checker.AbstractChecker
import leight.container.IContainer

class ResourceChecker(container: IContainer) : AbstractChecker<BuildingEntity>(container) {
	override fun check(item: BuildingEntity): Boolean {
		val kingdom = item.kingdom
		kingdom.getResources()
		TODO("Not yet implemented")
	}
}
