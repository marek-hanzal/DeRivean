package derivean.rest.root

import derivean.lib.container.IContainer
import derivean.lib.rest.AbstractFetchEndpoint
import io.ktor.util.*

@KtorExperimentalAPI
abstract class AbstractFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container, "root")
