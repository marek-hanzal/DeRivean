package derivean.lib.api.container

import derivean.lib.api.CoreException

open class ContainerException(message: String, cause: Throwable? = null) : CoreException(message, cause)
