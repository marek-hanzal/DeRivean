package derivean.lib.rest.page

import derivean.lib.server.ILinkGenerator

data class PageIndex(
	val count: Int,
	val items: List<ListItem>,
) {
	companion object {
		inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
	}

	class Builder(private val linkGenerator: ILinkGenerator) {
		var items = mutableListOf<ListItem>()

		fun item(block: ListItem.Builder.() -> Unit) {
			items.add(ListItem.build(linkGenerator, block))
		}

		fun build() = PageIndex(
			items.count(),
			items,
		)
	}
}
