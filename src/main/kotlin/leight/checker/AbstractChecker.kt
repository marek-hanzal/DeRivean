package leight.checker

import leight.container.AbstractService
import leight.container.IContainer

abstract class AbstractChecker<T>(container: IContainer) : AbstractService(container), IChecker<T>
