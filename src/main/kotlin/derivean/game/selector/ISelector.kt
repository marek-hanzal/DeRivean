package derivean.game.selector

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

/**
 * Selector for Spirit interaction; for example Selector could implement
 * selecting weakest Spirit against the given one.
 */
interface ISelector {
	/**
	 * Executes a selection against the given Spirit
	 */
	fun select(spirit: Spirit, spirits: Spirits): Spirits
}
