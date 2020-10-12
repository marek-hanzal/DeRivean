package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.storage.IStorage
import io.ktor.application.*

abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()

	fun limit(call: ApplicationCall, default: Int = 100) = if (call.parameters.contains("limit")) call.parameters["limit"]!!.toInt() else default
}
