package derivean.lib.mapper

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer

abstract class AbstractMapper<T, U>(container: IContainer) : AbstractService(container), IMapper<T, U> {
	@Suppress("UNCHECKED_CAST")
	fun toMapper() = this as IMapper<Any, out Any>
}
