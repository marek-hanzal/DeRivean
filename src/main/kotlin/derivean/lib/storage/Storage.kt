package derivean.lib.storage

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.pool.IPool
import org.jetbrains.exposed.sql.Database
import org.jetbrains.exposed.sql.Transaction

class Storage(container: IContainer) : AbstractService(container), IStorage {
	private val pool: IPool by container.lazy()
	private lateinit var database: Database

	override fun <T> transaction(statement: Transaction.() -> T) = org.jetbrains.exposed.sql.transactions.transaction(this.database, statement)

	override fun onSetup() {
		database = Database.connect(pool.source())
	}
}
