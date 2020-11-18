package leight.resource

import leight.config.IConfigurable

interface IResourceService<T> : IConfigurable {
	fun usages(): Map<String, (T) -> Double>
	fun limits(): Map<String, (T) -> Double?>

	fun limit(who: T, resource: String): Double?

	fun check(principal: String, who: T, resource: String)

	fun usage(who: T): List<Usage>
}
