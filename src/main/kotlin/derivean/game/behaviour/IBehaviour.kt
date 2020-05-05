package derivean.game.behaviour

import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

interface IBehaviour {
	/**
	 * Execute requested behavior on the given environment.
	 */
	fun act(spirit: Spirit, environment: IEnvironment)
}
