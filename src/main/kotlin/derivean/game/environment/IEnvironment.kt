package derivean.game.environment

import derivean.game.behaviour.IBehaviour
import derivean.game.entity.Relationships
import derivean.game.entity.Spirit

interface IEnvironment {
	/**
	 * Add two Spirits to an Environment marked as enemies (bi-directionally).
	 */
	fun enemies(first: Spirit, second: Spirit) = relationships().enemies(first, second)

	/**
	 * Return enemies of the given Spirit
	 */
	fun enemiesOf(spirit: Spirit) = relationships().enemiesOf(spirit)

	/**
	 * Add two Spirits to an Environment marked as friends (bi-directionally).
	 */
	fun friends(first: Spirit, second: Spirit) = relationships().friends(first, second)

	/**
	 * Return firends of the given Spirit
	 */
	fun friendsOf(spirit: Spirit) = relationships().friendsOf(spirit)

	/**
	 * Return current relationship of Spirits.
	 */
	fun relationships(): Relationships

	/**
	 * Compute a behavior for the given spirit based on current environment.
	 */
	fun behaviorOf(spirit: Spirit): IBehaviour

	/**
	 * Prepare an Environment for use; for example, compute behaviours of spirits and so on.
	 */
	fun prepare()

	/**
	 * Run a round (kind of tick of a clock) - this is a basic unit of a time.
	 */
	fun tick()
}
