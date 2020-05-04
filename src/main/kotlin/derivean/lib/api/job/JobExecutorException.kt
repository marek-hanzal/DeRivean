@file:Suppress("unused")

package derivean.lib.api.job

open class JobExecutorException(message: String, cause: Throwable? = null) : JobException(message, cause)
