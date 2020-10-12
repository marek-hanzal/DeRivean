package derivean.lib.rest.page

import derivean.lib.server.ILinkGenerator

data class ListItem(val id: String, val href: String) {
	companion object {
		inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
	}

	class Builder(private val linkGenerator: ILinkGenerator) {
		lateinit var id: String
		lateinit var href: String

		fun build() = ListItem(
			id,
			linkGenerator.link(href).toString(),
		)
	}
}
