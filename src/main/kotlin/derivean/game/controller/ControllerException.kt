package derivean.game.controller

import derivean.game.GameException

open class ControllerException(message: String, cause: Throwable? = null) : GameException(message, cause)
