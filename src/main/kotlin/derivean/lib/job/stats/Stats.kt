package derivean.lib.job.stats

import derivean.lib.job.IStats
import derivean.lib.job.IStatusStats

data class Stats(override val status: IStatusStats) : IStats
