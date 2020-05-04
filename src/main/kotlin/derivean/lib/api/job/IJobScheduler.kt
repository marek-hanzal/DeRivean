package derivean.lib.api.job

internal interface IJobScheduler : Runnable {
	fun schedule()
}
