package derivean.lib.server

import derivean.lib.container.IContainer
import io.ktor.http.Parameters
import io.ktor.http.Url

class LinkGenerator(container: IContainer) : ILinkGenerator {
	private val httpServerConfig: HttpServerConfig by container.lazy()
	private val host by lazy { Url(httpServerConfig.host) }

	override fun link(path: String, parameters: Parameters): Url {
		return Url(host.protocol, host.host, host.port, path, parameters, "", null, null, false)
	}
}
