package leight.http

import io.ktor.http.*
import java.net.URLEncoder

interface ILinkGenerator {
	fun link(path: String, parameters: Parameters = Parameters.Empty): Url

	fun link(path: String, block: ParametersBuilder.() -> Unit): Url = link(path, Parameters.build { block(this) })

	fun encoded(path: String, parameters: Parameters = Parameters.Empty) = link(path.split('/').joinToString("/") { URLEncoder.encode(it, "UTF-8") }, parameters)

	fun encoded(path: String, block: ParametersBuilder.() -> Unit): Url = encoded(path, Parameters.build { block(this) })
}
