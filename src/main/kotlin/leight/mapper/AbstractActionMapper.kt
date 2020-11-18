package leight.mapper

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage

abstract class AbstractActionMapper<T, U>(container: IContainer) : AbstractService(container), IActionMapper<T, U> {
	val storage: IStorage by container.lazy()
}
