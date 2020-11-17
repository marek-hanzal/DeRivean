package derivean.lib.mapper

import derivean.lib.config.IConfigurable

/**
 * Takes an input and map ip to an action (for example new
 * record in database).
 */
interface IActionMapper<T, U> : IConfigurable {
	fun resolve(item: T): U

	fun exception(e: Throwable): U?
}
