package derivean.lib.rest

import derivean.lib.rest.discovery.Discovery
import io.ktor.application.*
import io.ktor.http.*
import io.ktor.response.*

data class MessageResponse(val message: String)
data class ErrorResponse(val error: String)
data class LinkResponse(val href: String) {
	constructor(href: Url) : this(href.toString())
}

data class ValidationResponse(
	val message: String,
	val validations: Map<String, Validation>,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		lateinit var message: String
		private var validations = mutableMapOf<String, Validation>()

		fun validation(field: String, status: String, message: String) {
			validations[field] = Validation(status, message)
		}

		fun build() = ValidationResponse(
			message,
			validations,
		)
	}

	data class Validation(val status: String, val message: String)
}

data class Response(val code: HttpStatusCode, val response: Any? = null)

suspend fun ApplicationCall.resolve(response: Response) = if (response.response !== null) respond(response.code, response.response) else respond(response.code)

/**
 * send response with Bad Request status code
 */
fun badRequest(error: String) = Response(HttpStatusCode.BadRequest, ErrorResponse(error))

/**
 * send response with Forbidden status code
 */
fun forbidden(any: Any) = Response(HttpStatusCode.Forbidden, any)

fun forbidden(error: String) = forbidden(ErrorResponse(error))

/**
 * send response with Unauthorized status code
 */
fun unauthorized(error: String) = Response(HttpStatusCode.Unauthorized, ErrorResponse(error))

/**
 * send response with Created status code
 */
fun created(href: Url) = created(LinkResponse(href))

fun created(item: Any) = Response(HttpStatusCode.Created, item)

/**
 * send response with No Content status code
 */
fun noContent() = Response(HttpStatusCode.NoContent)

/**
 * send response with Not Found status code
 */
fun notFound(error: String) = Response(HttpStatusCode.NotFound, ErrorResponse(error))

/**
 * send response with Conflict status code
 */
fun conflict(error: String) = conflict(ErrorResponse(error))

fun conflict(any: Any) = Response(HttpStatusCode.Conflict, any)

/**
 * send response with Not Implemented status code
 */
fun notImplemented(error: String) = Response(HttpStatusCode.NotImplemented, ErrorResponse(error))

/**
 * send response with Internal Server Error status code
 */
fun internalServerError(any: Any) = Response(HttpStatusCode.InternalServerError, any)

fun internalServerError(error: String) = internalServerError(ErrorResponse(error))

/**
 * send response with Accepted status code
 */
fun accepted(message: String) = Response(HttpStatusCode.Accepted, MessageResponse(message))

fun ok(response: Any) = Response(HttpStatusCode.OK, response)

/**
 * send response with Accepted status code
 */
fun accepted() = Response(HttpStatusCode.Accepted)

fun discovery(discovery: Discovery) = Response(HttpStatusCode.OK, discovery)
