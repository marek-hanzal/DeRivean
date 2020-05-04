package derivean.lib.api.job

import derivean.lib.job.entity.Job

internal interface IJobExecutor : Runnable {
	fun start()

	fun enqueue(jobs: List<Job>)

	/**
	 * block if the execution queue is full (await job execution)
	 */
	fun execute(jobEntity: Job)

	/**
	 * count of active threads (approx)
	 */
	fun current(): Int

	fun count(): Int

	fun tickets(): Int

	fun stop(): Boolean
}
