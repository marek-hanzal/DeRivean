package derivean.lib.job

import derivean.lib.container.IContainer
import derivean.lib.job.entity.Job
import derivean.lib.job.entity.JobTable
import derivean.lib.storage.IStorage
import mu.KotlinLogging
import org.jetbrains.exposed.sql.SortOrder
import java.util.*
import kotlin.math.max
import kotlin.math.min

internal class JobController(container: IContainer) : IJobController {
	private val jobScheduler: IJobScheduler by container.lazy()
	private val jobConfig: JobConfig by container.lazy()
	private val storage: IStorage by container.lazy()
	private val logger = KotlinLogging.logger { }

	override fun run() {
		logger.debug { "Run: Running!" }
		try {
			while (!Thread.currentThread().isInterrupted) {
				logger.debug { "Run: Ordering schedule ticket" }
				jobScheduler.schedule()
				Thread.sleep(storage.read {
					try {
						max(jobConfig.shallowSleep, min(jobConfig.deepSleep, Job.find { JobTable.state eq JobState.CREATED }.orderBy(JobTable.schedule to SortOrder.ASC).limit(1).first().timeout))
					} catch (e: NoSuchElementException) {
						this@JobController.logger.debug { "Run: No more jobs, going to deep sleep for ${jobConfig.deepSleep}ms" }
						jobConfig.deepSleep
					}
				}.also { logger.debug { "Run: Falling asleep for ${it}ms" } })
			}
		} catch (e: InterruptedException) {
			logger.debug("Run: Interrupted")
		}
		logger.debug { "Run: Finished" }
	}
}
