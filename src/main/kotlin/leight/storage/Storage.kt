package leight.storage

import leight.container.AbstractService
import leight.container.IContainer
import leight.pool.IPool
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
