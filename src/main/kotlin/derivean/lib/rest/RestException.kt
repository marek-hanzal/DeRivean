package derivean.lib.rest

import derivean.lib.CoreException

open class RestException(message: String, cause: Throwable? = null) : CoreException(message, cause)
