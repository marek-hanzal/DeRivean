package derivean.game.user

import kotlin.reflect.full.memberProperties

class UserAttributes {
	companion object {
		const val RESOURCE_GEMS = "resource.gems"
		const val XP = "xp"
		const val KINGDOM_LIMIT = "kingdom.limit"

		fun export(): List<String> = Companion::class.memberProperties.map { it.get(this).toString() }
	}
}
