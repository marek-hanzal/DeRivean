package derivean.game.role

import derivean.game.ability.ICast
import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment
import derivean.game.selector.Selectors

class MageRole(selectors: Selectors) : AbstractRole(selectors) {
	override fun act(spirit: Spirit, environment: IEnvironment): List<ICast> {
		TODO("Not yet implemented")
	}
}
