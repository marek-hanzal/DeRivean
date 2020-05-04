package derivean.lib.api.storage

import derivean.lib.api.config.IConfigurable
import org.jetbrains.exposed.sql.Transaction

interface IStorage : IConfigurable<IStorage> {
	fun <T> transaction(statement: Transaction.() -> T): T

	fun <T> read(statement: Transaction.() -> T) = transaction(statement)

	fun <T> write(statement: Transaction.() -> T) = transaction(statement)
}
