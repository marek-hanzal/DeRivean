package derivean.lib.rest.page

import derivean.lib.utils.asStamp
import org.joda.time.DateTime

data class PageIndex(
	val items: List<ListItem>,
	val stamp: String = DateTime().asStamp()
)
