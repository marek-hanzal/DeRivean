package derivean.lib.rest.discovery

data class Parameter(
	val name: String,
	val type: String,
	val description: String,
	val required: Boolean = false
)
