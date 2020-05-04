package derivean.lib.rest

import io.ktor.http.Url

class Href(val href: String) {
	constructor(href: Url) : this(href.toString())
}
