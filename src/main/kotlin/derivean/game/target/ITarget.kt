package derivean.game.target

import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

interface ITarget {
	/**
	 * Get a Target from the given environment.
	 */
	fun get(spirit: Spirit, environment: IEnvironment): Spirit?
}
