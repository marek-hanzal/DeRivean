package leight.http

import io.ktor.http.*
import leight.container.AbstractService
import leight.container.IContainer

class LinkGenerator(container: IContainer) : AbstractService(container), ILinkGenerator {
	private val httpServerConfig: HttpServerConfig by container.lazy()
	private val host by lazy { Url(httpServerConfig.host) }

	override fun link(path: String, parameters: Parameters): Url {
		return Url(host.protocol, host.host, host.port, path, parameters, "", null, null, false)
	}
}
