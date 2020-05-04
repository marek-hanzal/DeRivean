package derivean.lib.api.rest

import derivean.lib.api.CoreException

open class RestException(message: String, cause: Throwable? = null) : CoreException(message, cause)
