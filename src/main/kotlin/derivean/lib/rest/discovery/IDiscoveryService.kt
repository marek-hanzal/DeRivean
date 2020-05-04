package derivean.lib.rest.discovery

interface IDiscoveryService {
	fun register(name: String, path: String, description: String, parameters: List<Parameter> = listOf())

	fun register(map: Map<String, Link>)

	fun discovery(): Discovery
}
