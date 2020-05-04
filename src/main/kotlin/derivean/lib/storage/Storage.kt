package derivean.lib.storage

import derivean.lib.api.container.IContainer
import derivean.lib.api.pool.IPool
import derivean.lib.api.storage.IStorage
import derivean.lib.config.AbstractConfigurable
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.Transaction

class Storage(container: IContainer) : AbstractConfigurable<IStorage>(), IStorage {
	private val pool: IPool by container.lazy()
	private lateinit var database: Database

	override fun <T> transaction(statement: Transaction.() -> T): T {
		return org.jetbrains.exposed.sql.transactions.transaction(this.database, statement)
	}

	override fun onSetup() {
		database = Database.connect(pool.source())
	}
}
