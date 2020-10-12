package derivean.lib.rest.page

import derivean.lib.rest.Href

data class PagesIndex(
	val total: Int,
	val limit: Int,
	val count: Int,
	val hrefs: List<Href>,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var total: Int = 0
		var limit: Int = 0
		var hrefs: MutableList<Href> = mutableListOf()

		fun build() = PagesIndex(
			total,
			limit,
			hrefs.count(),
			hrefs,
		)
	}
}
