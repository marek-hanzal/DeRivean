package derivean.game.strategy

import derivean.game.GameException

open class StrategyException(message: String, cause: Throwable? = null) : GameException(message, cause)
