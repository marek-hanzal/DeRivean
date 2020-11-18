package leight.resource

data class Usage(
	val resource: String,
	val usage: Double,
	val limit: Double?,
	val available: Boolean,
)
