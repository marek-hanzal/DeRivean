package derivean.lib.rest.page

import kotlin.math.ceil
import kotlin.properties.Delegates

data class PageIndex(
	/**
	 * Total number of items available.
	 */
	val total: Int,
	/**
	 * Current page size (should correspond with other values).
	 */
	val size: Int,
	/**
	 * Total number of pages available.
	 */
	val pages: Int,
	/**
	 * Item count - it should be same as items.size().
	 */
	val count: Int,
	/**
	 * Items of this page; could be also zero (thus total and others is zero).
	 */
	val items: List<*>,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var total by Delegates.notNull<Int>()
		var size by Delegates.notNull<Int>()
		val items = mutableListOf<Any>()

		fun build() = PageIndex(
			total,
			size,
			ceil(total.toDouble() / size.toDouble()).toInt(),
			items.count(),
			items,
		)
	}
}
