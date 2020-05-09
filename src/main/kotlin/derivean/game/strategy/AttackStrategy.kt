package derivean.game.strategy

import derivean.game.ability.ICast
import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment
import derivean.game.selector.Selectors

class AttackStrategy(selectors: Selectors) : AbstractStrategy(selectors) {
	override fun use(spirit: Spirit, environment: IEnvironment): List<ICast> {
		TODO("Not yet implemented")
	}
}
