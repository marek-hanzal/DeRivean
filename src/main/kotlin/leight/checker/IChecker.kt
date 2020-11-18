package leight.checker

import leight.config.IConfigurable

interface IChecker<T> : IConfigurable {
	/**
	 * Just perform a check.
	 */
	fun check(item: T): Boolean

	/**
	 * Validate item - if check return false, throws an exception.
	 */
	fun validate(item: T, message: String) = if (!check(item)) throw CheckerException(message) else Unit
}
