package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.terminator.ITerminator

abstract class AbstractController(val initiative: IInitiative, val terminator: ITerminator, val formations: Formations) : IController
