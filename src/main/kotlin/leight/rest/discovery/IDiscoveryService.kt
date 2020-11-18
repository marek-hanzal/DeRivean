package leight.rest.discovery

interface IDiscoveryService {
	fun register(block: Link.Builder.() -> Unit): Link

	fun discovery(): Map<String, Link>
}
