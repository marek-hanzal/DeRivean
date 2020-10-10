package derivean.game.terminator

import derivean.game.formation.Formations

/**
 * Terminator implements termination rules of the game. For example
 * on the beginning there are two armies fighting each other and Terminator
 * is responsible for seeing, if there are still entities alive or if
 * there is enough number of rounds run to terminate the battle.
 */
interface ITerminator {
	fun loop(formations: Formations)
}
