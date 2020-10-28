package derivean.lib.rest.discovery

import derivean.lib.http.ILinkGenerator

data class Link(
	val namespace: String,
	val group: String,
	val name: String,
	val link: String,
	val description: String,
) {
	companion object {
		inline fun build(linkGenerator: ILinkGenerator, block: Builder.() -> Unit) = Builder(linkGenerator).apply(block).build()
	}

	class Builder(private val linkGenerator: ILinkGenerator) {
		lateinit var namespace: String
		lateinit var group: String
		lateinit var name: String
		lateinit var link: String
		lateinit var description: String

		fun build() = Link(
			namespace,
			group,
			name,
			linkGenerator.link(link).toString(),
			description,
		)
	}
}
