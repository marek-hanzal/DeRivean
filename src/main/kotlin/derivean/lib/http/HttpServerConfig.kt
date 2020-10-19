package derivean.lib.http

data class HttpServerConfig(
	val port: Int,
	var host: String,
	var discovery: String = "/api/discovery",
	var client: String = "/client.json",
)
