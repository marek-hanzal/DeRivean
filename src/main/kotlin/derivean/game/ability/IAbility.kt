package derivean.game.ability

import derivean.game.entity.Relationships
import derivean.game.entity.Spirit

/**
 * General ability which could be used by a Spirit on group of another Spirit(s).
 */
interface IAbility {
	/**
	 * Unique identifier of an ability
	 */
	fun getId(): String

	/**
	 * Description of an ability
	 */
	fun getDescription(): String

	/**
	 * Execute an ability on a group of spirits
	 */
	fun use(spirit: Spirit, relationships: Relationships): List<IEffect>
}
