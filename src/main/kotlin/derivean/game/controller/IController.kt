package derivean.game.controller

/**
 * A Controller is responsible for the game workflow; it should be state-less and able to
 * take a battle properly when used for example on REST API.
 */
interface IController {
	/**
	 * Compute one round of actions. Each group of Entities is considered as
	 * standalone team, thus if there is battle controller, they will be attacking
	 * each other.
	 */
	fun loop()
}
