@file:Suppress("unused")

package derivean.lib.job

import derivean.lib.CoreException

open class JobException(message: String, cause: Throwable? = null) : CoreException(message, cause)
