package leight.mapper

import leight.container.AbstractService
import leight.container.IContainer

abstract class AbstractMapper<T, U>(container: IContainer) : AbstractService(container), IMapper<T, U>
