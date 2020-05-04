package derivean.lib.job.stats

import derivean.lib.api.job.IStats
import derivean.lib.api.job.IStatusStats

data class Stats(override val status: IStatusStats) : IStats
