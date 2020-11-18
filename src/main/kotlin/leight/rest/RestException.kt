package leight.rest

import leight.LeightException

open class RestException(message: String, cause: Throwable? = null) : LeightException(message, cause)
