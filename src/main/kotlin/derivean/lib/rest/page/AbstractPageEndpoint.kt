package derivean.lib.rest.page

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractEndpoint
import derivean.lib.storage.IStorage

abstract class AbstractPageEndpoint(container: IContainer) : AbstractEndpoint(container) {
	val storage: IStorage by container.lazy()
	val pageService: IPageService by container.lazy()
}
