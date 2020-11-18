package leight.resource

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage
import leight.user.ResourceLimitException

abstract class AbstractResourceService<T>(container: IContainer) : AbstractService(container), IResourceService<T> {
	protected val storage: IStorage by container.lazy()
	private lateinit var usages: Map<String, (T) -> Double>
	private lateinit var limits: Map<String, (T) -> Double?>

	override fun onSetup() {
		super.onSetup()
		usages = usages()
		limits = limits()
	}

	override fun limit(who: T, resource: String) = limits.getOrDefault(resource) { 0.0 }(who)

	override fun check(principal: String, who: T, resource: String) {
		storage.read {
			(usages[resource] ?: { 0.0 }).let { getUsage ->
				val usage = getUsage(who)
				limit(who, resource)?.let { limit ->
					if (usage >= limit) {
						throw ResourceLimitException("Principal [${principal}] exceeded resource usage [$resource] of [$usage / $limit max]!")
					}
				}
			}
		}
	}

	override fun usage(who: T) = storage.read {
		usages.map {
			val usage = it.value(who)
			val limit = limit(who, it.key)
			Usage(it.key, usage, limit, limit?.let { max -> usage < max } ?: true)
		}
	}
}
