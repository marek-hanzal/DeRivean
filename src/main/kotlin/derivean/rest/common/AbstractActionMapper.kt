package derivean.rest.common

import leight.container.IContainer
import leight.mapper.AbstractActionMapper
import leight.rest.ApplicationRequest
import leight.rest.Response

abstract class AbstractActionMapper<T>(container: IContainer) : AbstractActionMapper<ApplicationRequest<T>, Response<out Any>>(container)
