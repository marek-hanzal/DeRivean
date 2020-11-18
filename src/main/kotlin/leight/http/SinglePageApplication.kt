package leight.http

import io.ktor.application.*
import io.ktor.features.*
import io.ktor.http.*
import io.ktor.http.content.*
import io.ktor.request.*
import io.ktor.response.*
import io.ktor.routing.*
import io.ktor.util.*
import io.ktor.util.pipeline.*
import java.io.FileNotFoundException
import java.nio.file.Path
import java.nio.file.Paths

class SinglePageApplication(private val configuration: Configuration) {
	companion object Feature : ApplicationFeature<Application, Configuration, SinglePageApplication> {

		override val key = AttributeKey<SinglePageApplication>("SinglePageApplication")

		override fun install(
			pipeline: Application,
			configure: Configuration.() -> Unit
		): SinglePageApplication {

			val feature = SinglePageApplication(Configuration().apply(configure))

			pipeline.routing {
				static(feature.configuration.route) {
					resources(feature.configuration.path)
				}
			}

			pipeline.intercept(ApplicationCallPipeline.Fallback) {
				if (call.response.status() == null) {
					call.respond(HttpStatusCodeContent(HttpStatusCode.NotFound))
					finish()
				}
			}

			pipeline.sendPipeline.intercept(ApplicationSendPipeline.Before) { message ->
				feature.intercept(this, message)
			}

			return feature
		}

	}

	private suspend fun intercept(
		pipelineContext: PipelineContext<Any, ApplicationCall>,
		message: Any
	) = with(pipelineContext) context@{

		val requestUrl = call.request.uri
		val regex = configuration.ignoreIfContains
		val stop by lazy {
			!((regex == null || requestUrl.notContains(regex)) &&
				(requestUrl.startsWith(configuration.route) ||
					requestUrl.startsWith("/${configuration.route}")))
		}
		val is404 by lazy {
			message is HttpStatusCodeContent && message.status == HttpStatusCode.NotFound
		}
		val acceptsHtml by lazy {
			call.request.acceptItems().any {
				ContentType.Text.Html.match(it.value)
			}
		}

		if (call.attributes.contains(StatusPages.key) || stop || !is404 || !acceptsHtml)
			return@context

		call.attributes.put(key, this@SinglePageApplication)


		val indexPageApplication = call.resolveResource(configuration.fullPath().toString())
			?: throw FileNotFoundException("${configuration.fullPath()} not found")
		call.respond(indexPageApplication)
		finish()
	}

	data class Configuration(
		var route: String = "",
		var path: String = "client",
		var defaultPage: String = "index.html",
		var ignoreIfContains: Regex? = null
	) {
		fun fullPath(): Path = Paths.get(path, defaultPage)
	}
}

private fun String.notContains(regex: Regex) = !contains(regex)
