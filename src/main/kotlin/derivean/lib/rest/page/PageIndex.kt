package derivean.lib.rest.page

data class PageIndex(
	val count: Int,
	val items: List<*>,
) {
	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var items = mutableListOf<Any>()

		fun item(item: Any) {
			items.add(item)
		}

		fun build() = PageIndex(
			items.count(),
			items,
		)
	}
}
