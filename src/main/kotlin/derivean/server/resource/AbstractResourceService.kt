package derivean.server.resource

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.user.ResourceLimitException
import derivean.lib.user.Usage

abstract class AbstractResourceService<T>(container: IContainer) : AbstractService(container), IResourceService<T> {
	private lateinit var usages: Map<String, (T) -> Double>
	private lateinit var limits: Map<String, (T) -> Double?>

	override fun onSetup() {
		super.onSetup()
		usages = usages()
		limits = limits()
	}

	fun limit(who: T, resource: String) = limits.getOrDefault(resource) { 0.0 }(who)

	fun check(principal: String, who: T, resource: String) {
		usages.getOrDefault(resource) { 0.0 }.let { getUsage ->
			val usage = getUsage(who)
			limit(who, resource)?.let { limit ->
				if (usage >= limit) {
					throw ResourceLimitException("Principal [${principal}] exceeded resource usage [$resource] of [$usage / $limit max]!")
				}
			}
		}
	}

	fun usage(who: T) = usages.map {
		val usage = it.value(who)
		val limit = limit(who, it.key)
		Usage(it.key, usage, limit, limit?.let { max -> usage <= max } ?: true)
	}
}
