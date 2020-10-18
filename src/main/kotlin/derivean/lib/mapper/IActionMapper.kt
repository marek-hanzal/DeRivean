package derivean.lib.mapper

import derivean.lib.config.IConfigurable

/**
 * Takes an input and map ip to an action (for example new
 * record in database).
 */
interface IActionMapper<T> : IConfigurable {
	fun resolve(item: T)
}
