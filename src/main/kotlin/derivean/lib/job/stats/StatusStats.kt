package derivean.lib.job.stats

import derivean.lib.api.job.IStatusStats

data class StatusStats(
	override val created: Int,
	override val scheduled: Int,
	override val queued: Int,
	override val running: Int,
	override val successful: Int,
	override val failed: Int
) : IStatusStats
