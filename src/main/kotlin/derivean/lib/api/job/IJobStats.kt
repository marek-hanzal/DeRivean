package derivean.lib.api.job

interface IJobStats {
	fun stats(): IStats

	fun status(): IStatusStats
}
