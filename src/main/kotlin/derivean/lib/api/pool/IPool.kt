package derivean.lib.api.pool

import derivean.lib.api.config.IConfigurable
import javax.sql.DataSource

interface IPool : IConfigurable<IPool> {
	fun source(): DataSource
}
