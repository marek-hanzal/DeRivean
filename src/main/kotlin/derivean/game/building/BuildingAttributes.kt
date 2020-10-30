package derivean.game.building

import kotlin.reflect.full.memberProperties

class BuildingAttributes {
	companion object {
		const val COST = "cost"
		const val PRODUCTION_STONE = "production.stone"
		const val PRODUCTION_WOOD = "production.wood"
		const val PRODUCTION_FOOD = "production.food"
		const val PRODUCTION_GOLD = "production.gold"

		fun export(): List<String> = Companion::class.memberProperties.map { it.get(this).toString() }
	}
}
