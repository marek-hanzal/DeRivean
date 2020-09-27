package derivean.game.effect

import derivean.game.GameException

open class EffectException(message: String, cause: Throwable? = null) : GameException(message, cause)
