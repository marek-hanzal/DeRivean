package derivean.lib.rest

import derivean.lib.container.IContainer
import derivean.lib.mapper.IActionMapper
import io.ktor.application.*
import io.ktor.request.*

data class ApplicationRequest<T>(val call: ApplicationCall, val request: T)

abstract class AbstractActionEndpoint(container: IContainer) : AbstractEndpoint(container) {
	suspend inline fun <reified T : Any, U> resolve(call: ApplicationCall, actionMapper: IActionMapper<T, U>, crossinline block: U.() -> Response<U>) = handle(call) {
		call.resolve(block(actionMapper.resolve(call.receive())))
	}

	suspend inline fun <reified T : Any> resolve(call: ApplicationCall, actionMapper: IActionMapper<ApplicationRequest<T>, Response<out Any>>) = handle(call) {
		call.resolve(actionMapper.resolve(call.receive()))
	}
}
