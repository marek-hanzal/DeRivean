package derivean.lib.storage

import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.Table
import org.jetbrains.exposed.sql.Transaction

fun Column<*>.drop(transaction: Transaction) = this.dropStatement().forEach { transaction.exec(it) }
fun Table.drop(transaction: Transaction) = this.dropStatement().forEach { transaction.exec(it) }
