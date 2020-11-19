package leight.repository

import leight.checker.IChecker
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.SizedIterable
import java.util.*

interface IRepository<T : UUIDEntity> {
	fun create(block: T.() -> Unit): T

	fun update(uuid: String, block: T.() -> Unit) = find(uuid).also(block)

	fun find(uuid: String) = find(UUID.fromString(uuid))

	fun find(uuid: UUID): T

	fun delete(uuid: String) = delete(UUID.fromString(uuid))

	fun delete(uuid: UUID)

	/**
	 * Return total number of records in this repository (total number of rows in table).
	 *
	 * If filter is provided, items are iterated and counted manually.
	 */
	fun total(filter: EntityFilter<T>? = null): Long

	fun total(filter: IChecker<T>) = total(filter::check)

	fun source(paging: Paging): SizedIterable<T>

	/**
	 * Return just UUIDs of the given entity page.
	 */
	fun page(paging: Paging, block: (T) -> Unit, filter: EntityFilter<T>? = null)

	fun page(paging: Paging, block: (T) -> Unit, filter: IChecker<T>) = page(paging, block, filter::check)

	fun table(): UUIDTable

	fun all(): SizedIterable<T>
}
