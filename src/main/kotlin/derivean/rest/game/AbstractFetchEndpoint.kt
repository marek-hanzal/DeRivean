package derivean.rest.game

import io.ktor.util.*
import leight.container.IContainer
import leight.rest.AbstractFetchEndpoint

@KtorExperimentalAPI
abstract class AbstractFetchEndpoint(container: IContainer) : AbstractFetchEndpoint(container, "game", "root")
