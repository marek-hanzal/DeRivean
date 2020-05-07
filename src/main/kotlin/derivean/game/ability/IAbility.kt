package derivean.game.ability

import derivean.game.entity.Spirit
import derivean.game.entity.Spirits

/**
 * General ability which could be used by a Spirit on group of another Spirit(s).
 */
interface IAbility {
	/**
	 * Execute an ability on a group of spirits
	 */
	fun use(spirit: Spirit, spirits: Spirits): List<IEffect>
}
