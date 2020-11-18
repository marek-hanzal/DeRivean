package leight.mapper

import leight.config.IConfigurable

/**
 * Takes an input and map ip to an action (for example new
 * record in database).
 */
interface IActionMapper<T, U> : IConfigurable {
	fun resolve(item: T): U

	fun exception(e: Throwable): U? = e.message?.let { message ->
		exception().filter { message.contains(it.key) }.map { it.value() }.firstOrNull()
	}

	fun exception(): Map<String, () -> U> = mapOf()
}
