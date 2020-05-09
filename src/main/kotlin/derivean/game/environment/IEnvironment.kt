package derivean.game.environment

import derivean.game.entity.Relationships
import derivean.game.entity.Spirits

interface IEnvironment {
	/**
	 * REturn all known spirits
	 */
	fun spirits(): Spirits

	/**
	 * Return current relationship of Spirits.
	 */
	fun relationships(): Relationships
}
