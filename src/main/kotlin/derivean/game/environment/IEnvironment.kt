package derivean.game.environment

import derivean.game.entity.Relationships

interface IEnvironment {
	/**
	 * Return current relationship of Spirits.
	 */
	fun relationships(): Relationships

	/**
	 * Prepare an Environment for use; for example, compute behaviours of spirits and so on.
	 */
	fun prepare()

	/**
	 * Run a round (kind of tick of a clock) - this is a basic unit of a time.
	 */
	fun tick()
}
