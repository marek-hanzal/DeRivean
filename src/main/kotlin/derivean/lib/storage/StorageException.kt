package derivean.lib.storage

import derivean.lib.api.CoreException

open class StorageException(message: String, cause: Throwable? = null) : CoreException(message, cause)
