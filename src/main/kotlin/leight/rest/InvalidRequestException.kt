package leight.rest

class InvalidRequestException(message: String, cause: Throwable? = null) : RestException(message, cause)
