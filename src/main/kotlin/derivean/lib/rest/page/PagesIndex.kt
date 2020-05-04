package derivean.lib.rest.page

import derivean.lib.rest.Href
import derivean.lib.utils.asStamp
import org.joda.time.DateTime

data class PagesIndex(
	val total: Int,
	val limit: Int,
	val count: Int,
	val hrefs: List<Href>,
	val stamp: String = DateTime().asStamp()
)
