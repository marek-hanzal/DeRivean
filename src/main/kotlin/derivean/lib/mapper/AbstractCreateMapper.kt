package derivean.lib.mapper

import derivean.lib.container.IContainer
import derivean.lib.rest.Response
import derivean.lib.rest.ValidationResponse
import derivean.lib.rest.conflict

abstract class AbstractCreateMapper<T>(container: IContainer) : AbstractActionMapper<T, Response<out Any>>(container) {
	fun resolveUnique(exception: String, message: String, names: List<Pair<String, String>>): Response<Any>? {
		for (name in names) {
			if (exception.contains(name.second)) {
				return conflict(ValidationResponse.build {
					this.message = message
					this.validation(name.first, "error", "Duplicate key [${name.second}]")
				})
			}
		}
		return null
	}
}
