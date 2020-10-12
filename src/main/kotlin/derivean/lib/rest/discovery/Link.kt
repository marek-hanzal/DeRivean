package derivean.lib.rest.discovery

import io.ktor.http.*

class Link(
	val name: String,
	val link: String,
	val description: String,
	val parameters: List<Parameter> = listOf()
) {
	constructor(
		name: String,
		link: Url,
		description: String,
		parameters: List<Parameter> = listOf()
	) : this(
		name,
		link.toString(),
		description,
		parameters
	)

	companion object {
		inline fun build(block: Builder.() -> Unit) = Builder().apply(block).build()
	}

	class Builder {
		var name: String = ""
		var link: String = ""
		var description: String = ""
		var parameters = mutableListOf<Parameter>()

		fun build() = Link(
			name,
			link,
			description,
			parameters,
		)
	}
}
