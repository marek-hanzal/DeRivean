package leight.rest

class UnauthorizedException(message: String, cause: Throwable? = null) : RestException(message, cause)
