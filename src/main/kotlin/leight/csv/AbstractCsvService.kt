package leight.csv

import leight.container.AbstractService
import leight.container.IContainer

abstract class AbstractCsvService(container: IContainer) : AbstractService(container), ICsvService
