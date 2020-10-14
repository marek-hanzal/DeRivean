package derivean.lib.repository

import org.jetbrains.exposed.dao.Entity
import java.util.*

interface IRepository<T : Entity<*>> {
	fun update(uuid: String, block: T.() -> T) = block(find(uuid))

	fun find(uuid: String) = find(UUID.fromString(uuid))

	fun find(uuid: UUID): T

	fun delete(uuid: String) = delete(UUID.fromString(uuid))

	fun delete(uuid: UUID)

	/**
	 * Return total number of records in this repository (total number of rows in table).
	 */
	fun total(): Int

	/**
	 * Return just UUIDs of the given entity page.
	 */
	fun page(page: Int, limit: Int, block: (T) -> Unit)
}
