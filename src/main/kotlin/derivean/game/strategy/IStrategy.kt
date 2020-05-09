package derivean.game.strategy

import derivean.game.ability.ICast
import derivean.game.entity.Spirit
import derivean.game.environment.IEnvironment

/**
 * General strategy able to use an ability; this is kind of "brain" of a battlefield.
 */
interface IStrategy {
	/**
	 * Use a Strategy on the given spirit in the given Environment;
	 * results are Cast(s)
	 */
	fun use(spirit: Spirit, environment: IEnvironment): List<ICast>

	/**
	 * Use a Strategy using Spirit's name
	 */
	fun use(name: String, environment: IEnvironment) = use(environment.spirits().get(name), environment)
}
