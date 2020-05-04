package derivean.lib.job.stats

import derivean.lib.container.IContainer
import derivean.lib.job.IJobStats
import derivean.lib.job.JobException
import derivean.lib.storage.IStorage

class JobStats(container: IContainer) : IJobStats {
	private val storage: IStorage by container.lazy()

	override fun stats() = Stats(status())

	override fun status() = storage.read {
		exec("""
                SELECT
                    (SELECT COUNT(id) FROM job WHERE state = 'CREATED') AS created,
                    (SELECT COUNT(id) FROM job WHERE state = 'SCHEDULED') AS scheduled,
                    (SELECT COUNT(id) FROM job WHERE state = 'QUEUED') AS queued,
                    (SELECT COUNT(id) FROM job WHERE state = 'RUNNING') AS running,
                    (SELECT COUNT(id) FROM job WHERE state = 'SUCCESSFUL') AS successful,
                    (SELECT COUNT(id) FROM job WHERE state = 'FAILED') AS failed
            """) {
			it.next()
			StatusStats(
				it.getInt("created"),
				it.getInt("scheduled"),
				it.getInt("queued"),
				it.getInt("running"),
				it.getInt("successful"),
				it.getInt("failed")
			)
		} ?: throw JobException("Cannot query job stats!")
	}
}
