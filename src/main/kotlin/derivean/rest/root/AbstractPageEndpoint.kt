package derivean.rest.root

import io.ktor.util.*
import leight.container.IContainer
import leight.rest.page.AbstractPageEndpoint

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "root")
