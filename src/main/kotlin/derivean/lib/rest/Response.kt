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

data class Response<T>(val code: HttpStatusCode, val response: T? = null)

suspend fun <T> ApplicationCall.resolve(response: Response<T>) = if (response.response !== null) respond(response.code, response.response) else respond(response.code)

/**
 * send response with Bad Request status code
 */
fun badRequest(error: String) = Response(HttpStatusCode.BadRequest, ErrorResponse(error))

/**
 * send response with Forbidden status code
 */
fun <T> forbidden(response: T) = Response(HttpStatusCode.Forbidden, response)

fun forbidden(error: String) = forbidden(ErrorResponse(error))

/**
 * send response with Unauthorized status code
 */
fun unauthorized(error: String) = Response(HttpStatusCode.Unauthorized, ErrorResponse(error))

/**
 * send response with Created status code
 */
fun created(href: Url) = created(LinkResponse(href))

fun <T> created(response: T) = Response(HttpStatusCode.Created, response)

/**
 * send response with No Content status code
 */
fun noContent() = Response<Nothing>(HttpStatusCode.NoContent)

/**
 * send response with Not Found status code
 */
fun notFound(error: String) = Response(HttpStatusCode.NotFound, ErrorResponse(error))

/**
 * send response with Conflict status code
 */
fun conflict(error: String) = conflict(ErrorResponse(error))

fun <T> conflict(response: T) = Response(HttpStatusCode.Conflict, response)

fun conflictWithUnique(message: String, field: String, hint: String) = conflict(ValidationResponse.build {
	this.message = message
	this.validation(field, "error", hint)
})

/**
 * send response with Not Implemented status code
 */
fun notImplemented(error: String) = Response(HttpStatusCode.NotImplemented, ErrorResponse(error))

/**
 * send response with Internal Server Error status code
 */
fun <T> internalServerError(response: T) = Response(HttpStatusCode.InternalServerError, response)

fun internalServerError(error: String) = internalServerError(ErrorResponse(error))

/**
 * send response with Accepted status code
 */
fun accepted(message: String) = Response(HttpStatusCode.Accepted, MessageResponse(message))

fun <T> ok(response: T) = Response(HttpStatusCode.OK, response)

/**
 * send response with Accepted status code
 */
fun accepted() = Response<Nothing>(HttpStatusCode.Accepted)

fun discovery(discovery: Discovery) = Response(HttpStatusCode.OK, discovery)
