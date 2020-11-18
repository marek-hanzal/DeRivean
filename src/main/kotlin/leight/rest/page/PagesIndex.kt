package leight.rest.page

import kotlin.properties.Delegates

data class PagesIndex(
	val total: Int,
	val size: Int,
	val count: Int,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var total by Delegates.notNull<Int>()
		var size by Delegates.notNull<Int>()
		var count by Delegates.notNull<Int>()

		fun build() = PagesIndex(
			total,
			size,
			count,
		)
	}
}
