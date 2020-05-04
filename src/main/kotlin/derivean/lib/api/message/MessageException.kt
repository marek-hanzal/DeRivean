package derivean.lib.api.message

import derivean.lib.api.CoreException

open class MessageException(message: String, cause: Throwable? = null) : CoreException(message, cause)
