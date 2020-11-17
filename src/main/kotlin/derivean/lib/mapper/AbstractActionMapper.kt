package derivean.lib.mapper

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage

abstract class AbstractActionMapper<T, U>(container: IContainer) : AbstractService(container), IActionMapper<T, U> {
	val storage: IStorage by container.lazy()

	override fun exception(e: Throwable): U? = null
}
