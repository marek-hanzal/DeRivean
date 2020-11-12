package derivean.server.rest.root

import derivean.lib.container.IContainer
import derivean.lib.rest.page.AbstractPageEndpoint
import io.ktor.util.*

@KtorExperimentalAPI
abstract class AbstractPageEndpoint(container: IContainer) : AbstractPageEndpoint(container, "root")
