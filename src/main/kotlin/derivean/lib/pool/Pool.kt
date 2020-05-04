package derivean.lib.pool

import com.zaxxer.hikari.HikariConfig
import com.zaxxer.hikari.HikariDataSource
import derivean.lib.api.container.IContainer
import derivean.lib.api.pool.IPool
import derivean.lib.config.AbstractConfigurable
import javax.sql.DataSource

class Pool(container: IContainer) : AbstractConfigurable<IPool>(), IPool {
	private val poolConfig: PoolConfig by container.lazy()
	private lateinit var dataSource: DataSource

	override fun source(): DataSource {
		return dataSource
	}

	override fun onSetup() {
		super.onSetup()
		dataSource = HikariDataSource(HikariConfig().apply {
			jdbcUrl = poolConfig.url
			username = poolConfig.user
			password = poolConfig.password
			maximumPoolSize = poolConfig.size
			poolName = poolConfig.name
		})
	}
}
