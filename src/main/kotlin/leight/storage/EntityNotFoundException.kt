package leight.storage

class EntityNotFoundException(message: String, cause: Throwable? = null) : StorageException(message, cause)
