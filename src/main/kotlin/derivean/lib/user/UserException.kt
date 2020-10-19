package derivean.lib.user

import derivean.lib.CoreException

open class UserException(message: String, cause: Throwable? = null) : CoreException(message, cause)
