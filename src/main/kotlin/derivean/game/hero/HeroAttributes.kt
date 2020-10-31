package derivean.game.hero

import kotlin.reflect.full.memberProperties

class HeroAttributes {
	companion object {
		const val XP = "xp"
		const val HEALTH = "health"
		const val HEALTH_MAX = "health.max"
		const val MANA = "mana"
		const val MANA_MAX = "mana.max"

		fun export(): List<String> = Companion::class.memberProperties.map { it.get(this).toString() }
	}
}
