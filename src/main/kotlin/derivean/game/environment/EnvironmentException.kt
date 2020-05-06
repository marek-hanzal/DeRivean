package derivean.game.environment

import derivean.game.GameException

open class EnvironmentException(message: String, cause: Throwable? = null) : GameException(message, cause)
