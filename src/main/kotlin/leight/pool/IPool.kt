package leight.pool

import leight.config.IConfigurable
import javax.sql.DataSource

interface IPool : IConfigurable {
	fun source(): DataSource
}
