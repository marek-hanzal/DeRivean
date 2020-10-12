package derivean.lib.rest.page

import derivean.lib.server.ILinkGenerator

data class ListItem(val id: String, val href: String) {
//	constructor(id: UUID, href: Url) : this(id.toString(), href.toString())
//	constructor(id: EntityID<UUID>, href: Url) : this(id.toString(), href.toString())

	companion object {
		inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
	}

	class Builder(private val linkGenerator: ILinkGenerator) {
		var id: String = ""
		var href: String = ""

		fun build() = ListItem(
			id,
			linkGenerator.link(href).toString(),
		)
	}
}
