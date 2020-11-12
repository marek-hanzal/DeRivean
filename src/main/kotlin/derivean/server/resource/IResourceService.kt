package derivean.server.resource

import derivean.lib.config.IConfigurable

interface IResourceService<T> : IConfigurable {
	fun usages(): Map<String, (T) -> Double>
	fun limits(): Map<String, (T) -> Double?>
}
