package derivean.rest.common

import derivean.lib.container.IContainer
import derivean.lib.mapper.AbstractActionMapper
import derivean.lib.rest.ApplicationRequest
import derivean.lib.rest.Response

abstract class AbstractActionMapper<T>(container: IContainer) : AbstractActionMapper<ApplicationRequest<T>, Response<out Any>>(container)
