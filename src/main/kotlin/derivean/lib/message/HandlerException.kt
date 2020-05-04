package derivean.lib.message

open class HandlerException(message: String, cause: Throwable? = null) : MessageException(message, cause)
