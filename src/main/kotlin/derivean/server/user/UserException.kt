package derivean.server.user

import derivean.server.ServerException

open class UserException(message: String, cause: Throwable? = null) : ServerException(message, cause)
