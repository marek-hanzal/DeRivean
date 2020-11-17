package derivean.lib.repository

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.*

interface IRelationRepository<T : UUIDEntity> {
	/**
	 * Return total number of records in this repository (total number of rows in table).
	 */
	fun total(relation: UUID, filter: EntityFilter<T>? = null): Long

	/**
	 * Return just UUIDs of the given entity page.
	 */
	fun page(relation: UUID, page: Int, limit: Int, block: (T) -> Unit, filter: EntityFilter<T>? = null)

	fun table(): UUIDTable
}
