package derivean.lib.message

import derivean.lib.CoreException

open class MessageException(message: String, cause: Throwable? = null) : CoreException(message, cause)
