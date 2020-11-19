package leight.repository

import kotlin.math.floor

data class Paging(val page: Int, val limit: Int) {
	val offset: Long
		get() = (page * limit).toLong()

	fun pages(total: Long) = floor(total.toDouble() / limit.toDouble()).toInt()

	fun validate(total: Long) = also {
		if (page < 0) {
			throw InvalidPageException("Page must be a positive number")
		}
		if (limit < 1) {
			throw InvalidLimitException("Limit must be a positive number and higher than 0")
		}
		if (limit > 100) {
			throw InvalidLimitException("Limit cannot be higher than 100")
		}
		val pages = pages(total)
		if (page > pages) {
			throw InvalidPageException("Out of range: page [$page] cannot be higher than [$pages]")
		}
	}
}
