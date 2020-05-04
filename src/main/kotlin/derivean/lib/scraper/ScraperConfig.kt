package derivean.lib.scraper

data class ScraperConfig(
	val url: String,
	val timeout: Int = 15000
)
