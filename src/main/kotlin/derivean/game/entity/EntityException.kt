package derivean.game.entity

import derivean.game.GameException

open class EntityException(message: String, cause: Throwable? = null) : GameException(message, cause)
