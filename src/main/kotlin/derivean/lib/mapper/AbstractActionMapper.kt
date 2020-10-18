package derivean.lib.mapper

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer

abstract class AbstractActionMapper<T>(container: IContainer) : AbstractService(container), IActionMapper<T>
