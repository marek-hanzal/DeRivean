@file:Suppress("unused")

package derivean.lib.api.job

import derivean.lib.api.CoreException

open class JobException(message: String, cause: Throwable? = null) : CoreException(message, cause)
