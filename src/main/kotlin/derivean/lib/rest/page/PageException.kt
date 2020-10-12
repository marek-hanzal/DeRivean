package derivean.lib.rest.page

import derivean.lib.rest.RestException

open class PageException(message: String, cause: Throwable? = null) : RestException(message, cause)
