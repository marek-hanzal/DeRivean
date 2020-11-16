@file:Suppress("MemberVisibilityCanBePrivate")

package derivean.lib.rest

import com.google.gson.JsonSyntaxException
import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.http.ILinkGenerator
import derivean.lib.rest.discovery.IDiscoveryService
import derivean.lib.rest.discovery.Link
import io.ktor.application.*

abstract class AbstractEndpoint(container: IContainer) : AbstractService(container), IEndpoint {
	protected val discoveryService: IDiscoveryService by container.lazy()
	protected val linkGenerator: ILinkGenerator by container.lazy()

	protected fun discovery(block: Link.Builder.() -> Unit) = discoveryService.register(block)

	suspend fun handle(
		call: ApplicationCall,
		callback: suspend ApplicationCall.() -> Unit
	) {
		try {
			callback(call)
		} catch (e: JsonSyntaxException) {
			call.resolve(badRequest("Malformed JSON"))
			logger.error(e.message, e)
		} catch (e: NoSuchElementException) {
			call.resolve(notFound("Item not found!"))
			logger.error(e.message, e)
		} catch (e: InvalidRequestException) {
			call.resolve(badRequest(e.message ?: "You sent something strange and I don't understand your request. Try read docs, make a coffee or fix this bug :)"))
			logger.error(e.message, e)
		} catch (e: UnauthorizedException) {
			call.resolve(forbidden("Your request looks not good for us, sorry."))
			logger.error(e.message, e)
		} catch (e: Throwable) {
			logger.error(e.message, e)
			throw e
		}
	}
}
