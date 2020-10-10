package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative

abstract class AbstractController(val initiative: IInitiative, val formations: Formations) : IController
