package derivean.game.ability

import derivean.game.GameException

class UnknownAbilityException(message: String, cause: Throwable? = null) : GameException(message, cause)
