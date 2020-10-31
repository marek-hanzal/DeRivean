package derivean.lib.repository

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
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
	 */
	fun total(): Long

	/**
	 * Return just UUIDs of the given entity page.
	 */
	fun page(page: Int, limit: Int, block: (T) -> Unit)

	fun table(): UUIDTable
}
