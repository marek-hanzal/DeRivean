package derivean.rest.common

import java.util.*

data class Attribute(
	val type: UUID,
	val name: String? = null,
	val value: Double,
)
