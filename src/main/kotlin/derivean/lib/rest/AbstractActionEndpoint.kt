package derivean.lib.rest

import derivean.lib.container.IContainer
import derivean.lib.mapper.IActionMapper
import io.ktor.application.*
import io.ktor.request.*

abstract class AbstractActionEndpoint(container: IContainer) : AbstractEndpoint(container) {
	suspend inline fun <reified T : Any, U> resolve(call: ApplicationCall, actionMapper: IActionMapper<T, U>, crossinline block: U.() -> Response) = handle(call) {
		call.resolve(block(actionMapper.resolve(call.receive())))
	}
}
