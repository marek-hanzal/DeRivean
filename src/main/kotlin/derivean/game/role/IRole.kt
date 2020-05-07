package derivean.game.role

import derivean.game.ability.ICast
import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

interface IRole {
	/**
	 * Do an action - generate a list of abilities being used
	 */
	fun act(spirit: Spirit, environment: IEnvironment): List<ICast>
}
