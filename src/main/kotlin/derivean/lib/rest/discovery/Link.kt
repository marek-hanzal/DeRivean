package derivean.lib.rest.discovery

import derivean.lib.http.ILinkGenerator

data class Link(
	val name: String,
	val link: String,
	val description: String,
) {
	companion object {
		inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
	}

	class Builder(private val linkGenerator: ILinkGenerator) {
		lateinit var name: String
		lateinit var link: String
		lateinit var description: String

		fun build() = Link(
			name,
			linkGenerator.link(link).toString(),
			description,
		)
	}
}
