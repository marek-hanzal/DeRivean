package derivean.server.config

import derivean.lib.pool.PoolConfig
import derivean.lib.server.HttpServerConfig

data class EngineConfig(
	val version: String,
	val pool: PoolConfig,
	val httpServer: HttpServerConfig
)
