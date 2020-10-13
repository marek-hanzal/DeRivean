package derivean.lib.mapper

/**
 * Takes an input and map ip to an action (for example new
 * record in database).
 */
interface IActionMapper<T> {
	fun resolve(map: T)
}
