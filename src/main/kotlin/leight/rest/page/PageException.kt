package leight.rest.page

import leight.rest.RestException

open class PageException(message: String, cause: Throwable? = null) : RestException(message, cause)
