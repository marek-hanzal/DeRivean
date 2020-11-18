package leight.user

import leight.LeightException

open class UserException(message: String, cause: Throwable? = null) : LeightException(message, cause)
