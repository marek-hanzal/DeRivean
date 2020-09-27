package derivean.game.effect

import derivean.game.attribute.Duel
import derivean.game.attribute.Result

/**
 * General effect - for example PhysicalAttack or Healing or whatever.
 *
 * The goal is to be able to compute delta for the given attributes (just to see what happened) and
 * apply effect to the given attributes.
 *
 * Effect is responsible for the game rules, for example like PiercingShot (: IEffect) knows that it could
 * ignore physical defense and so.
 */
interface IEffect {
	val effect: String

	/**
	 * Just evaluate effect result which could be applied to the given attributes.
	 *
	 * For example, this could be PhysicalAttack and resulting Attributes will be given damage (damage in general is
	 * health loss).
	 *
	 * This is main method for game rules implementation (for example fireball thrown on fire element could give him boost,
	 * but common folk could be burn to the ground).
	 */
	fun evaluate(duel: Duel): Result
}
