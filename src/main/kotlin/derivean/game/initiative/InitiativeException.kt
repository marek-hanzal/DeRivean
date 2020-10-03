package derivean.game.initiative

import derivean.game.GameException

open class InitiativeException(message: String, cause: Throwable? = null) : GameException(message, cause)
