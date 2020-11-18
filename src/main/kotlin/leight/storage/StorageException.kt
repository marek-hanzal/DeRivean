package leight.storage

import leight.LeightException

open class StorageException(message: String, cause: Throwable? = null) : LeightException(message, cause)
