package derivean.lib.job

internal interface IJobScheduler : Runnable {
	fun schedule()
}
