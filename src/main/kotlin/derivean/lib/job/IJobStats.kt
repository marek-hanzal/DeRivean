package derivean.lib.job

interface IJobStats {
	fun stats(): IStats

	fun status(): IStatusStats
}
