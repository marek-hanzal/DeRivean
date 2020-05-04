package derivean.game.entity

import derivean.game.GameException

class EntityException(message: String, cause: Throwable? = null) : GameException(message, cause)
