package derivean.lib.api.rest

class InvalidRequestException(message: String, cause: Throwable? = null) : RestException(message, cause)
