package leight.storage

import org.jetbrains.exposed.sql.*

fun Column<*>.drop(transaction: Transaction) = this.dropStatement().forEach { transaction.exec(it) }
fun Table.drop(transaction: Transaction) = this.dropStatement().forEach { transaction.exec(it) }

class InsensitiveLikeOp(expr1: Expression<*>, expr2: Expression<*>) : ComparisonOp(expr1, expr2, "ILIKE")

infix fun <T : String?> ExpressionWithColumnType<T>.ilike(pattern: String): Op<Boolean> = InsensitiveLikeOp(this, QueryParameter(pattern, columnType))
