package derivean.server.config

import leight.http.HttpServerConfig
import leight.pool.PoolConfig

data class EngineConfig(
	val version: String,
	val pool: PoolConfig,
	val httpServer: HttpServerConfig
)
