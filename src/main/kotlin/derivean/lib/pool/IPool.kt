package derivean.lib.pool

import derivean.lib.config.IConfigurable
import javax.sql.DataSource

interface IPool : IConfigurable<IPool> {
	fun source(): DataSource
}
