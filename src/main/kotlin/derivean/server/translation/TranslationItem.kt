package derivean.server.translation

data class TranslationItem(
	val id: String,
	val language: String,
	val namespace: String,
	val label: String,
	val text: String,
)
