@file:Suppress("MemberVisibilityCanBePrivate")

package derivean.lib.rest

import com.google.gson.JsonSyntaxException
import derivean.lib.container.IContainer
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.discovery.Parameter
import io.ktor.application.*
import mu.KotlinLogging

abstract class AbstractEndpoint(container: IContainer) : IEndpoint {
	protected val discoveryService: IDiscoveryService by container.lazy()
	protected val logger = KotlinLogging.logger(this::class.qualifiedName!!)

	protected fun discovery(name: String, path: String, description: String, parameters: List<Parameter> = listOf()) = discoveryService.register(name, path, description, parameters)

	suspend fun handle(
		call: ApplicationCall,
		callback: suspend ApplicationCall.() -> Unit
	) {
		try {
			callback(call)
		} catch (e: JsonSyntaxException) {
			call.badRequest("Malformed JSON")
			logger.error(e.message, e)
		} catch (e: InvalidRequestException) {
			call.badRequest(e.message ?: "You sent something strange and I don't understand your request. Try read docs, make a coffee or fix this bug :)")
			logger.error(e.message, e)
		} catch (e: UnauthorizedException) {
			call.forbidden("Your request looks not good for us, sorry.")
			logger.error(e.message, e)
		} catch (e: Throwable) {
			call.internalServerError("Something went wrong")
			logger.error(e.message, e)
		}
	}
}
