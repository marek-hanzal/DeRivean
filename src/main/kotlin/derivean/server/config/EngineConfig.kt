package derivean.server.config

import derivean.lib.http.HttpServerConfig
import derivean.lib.pool.PoolConfig

data class EngineConfig(
	val version: String,
	val pool: PoolConfig,
	val httpServer: HttpServerConfig
)
