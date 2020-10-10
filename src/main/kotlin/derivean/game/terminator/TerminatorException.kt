package derivean.game.terminator

import derivean.game.GameException

open class TerminatorException(message: String, cause: Throwable? = null) : GameException(message, cause)
