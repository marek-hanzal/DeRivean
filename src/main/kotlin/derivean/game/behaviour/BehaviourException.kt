package derivean.game.behaviour

import derivean.game.GameException

open class BehaviourException(message: String, cause: Throwable? = null) : GameException(message, cause)
