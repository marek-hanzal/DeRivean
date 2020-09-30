package derivean.lib.storage

import derivean.lib.config.IConfigurable
import org.jetbrains.exposed.sql.Transaction

interface IStorage : IConfigurable {
	fun <T> transaction(statement: Transaction.() -> T): T

	fun <T> read(statement: Transaction.() -> T) = transaction(statement)

	fun <T> write(statement: Transaction.() -> T) = transaction(statement)
}
