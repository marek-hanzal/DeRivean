package derivean.game.kingom

import kotlin.reflect.full.memberProperties

class KingdomAttributes {
	companion object {
		const val RESOURCE_STONE = "resource.stone"
		const val RESOURCE_WOOD = "resource.wood"
		const val RESOURCE_FOOD = "resource.food"
		const val RESOURCE_GOLD = "resource.gold"

		fun export(): List<String> = Companion::class.memberProperties.map { it.get(this).toString() }
	}
}
