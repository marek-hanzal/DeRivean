package leight.repository

class InvalidLimitException(message: String, cause: Throwable? = null) : PageException(message, cause)
