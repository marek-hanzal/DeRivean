package derivean.rest.root

import io.ktor.util.*
import leight.container.IContainer
import leight.rest.AbstractFetchEndpoint

@KtorExperimentalAPI
abstract class AbstractFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container, "root")
