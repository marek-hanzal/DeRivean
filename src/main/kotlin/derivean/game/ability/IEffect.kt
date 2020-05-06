package derivean.game.ability

import derivean.game.entity.Entity
import derivean.game.entity.Spirit

interface IEffect {
	/**
	 * Apply an effect
	 */
	fun apply()

	/**
	 * Get a Spirit causing this Effect
	 */
	fun getSpirit(): Spirit

	/**
	 * Return effect entity
	 */
	fun getEffect(): Entity
}
