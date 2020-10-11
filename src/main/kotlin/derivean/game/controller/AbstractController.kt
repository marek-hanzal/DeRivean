package derivean.game.controller

import derivean.game.formation.Formations
import derivean.game.initiative.IInitiative
import derivean.game.log.ILog
import derivean.game.terminator.ITerminator
import derivean.game.timeline.ITimeline

abstract class AbstractController(
	val initiative: IInitiative,
	val terminator: ITerminator,
	val formations: Formations,
	val timeline: ITimeline,
	val log: ILog,
) : IController
