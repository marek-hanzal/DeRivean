package derivean.game.ability

/**
 * Just formal interface to eliminate hard dependency Interface/Class.
 */
interface ICast {
	fun cast(): List<IEffect>
}
