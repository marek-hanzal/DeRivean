package derivean.lib.rest.page

import derivean.lib.rest.Href
import derivean.lib.utils.asStamp
import org.joda.time.DateTime

data class PagesIndex(
	val total: Int,
	val limit: Int,
	val hrefs: List<Href>,
	val stamp: String,
) {
	val count: Int get() = hrefs.size

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var total: Int = 0
		var limit: Int = 0
		var hrefs: MutableList<Href> = mutableListOf()
		var stamp = DateTime().asStamp()

		fun build() = PagesIndex(
			total,
			limit,
			hrefs,
			stamp,
		)
	}
}
