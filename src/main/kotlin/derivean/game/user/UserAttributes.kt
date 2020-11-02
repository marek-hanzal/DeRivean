package derivean.game.user

import kotlin.reflect.full.memberProperties

class UserAttributes {
	companion object {
		const val RESOURCE_GEMS = "resource.gems"
		const val XP = "xp"

		fun export(): List<String> = Companion::class.memberProperties.map { it.get(this).toString() }
	}
}
