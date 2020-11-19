package leight.repository

import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.SizedIterable
import java.util.*

interface IRelationRepository<T : UUIDEntity> {
	/**
	 * Return total number of records in this repository (total number of rows in table).
	 */
	fun total(relation: UUID, filter: EntityFilter<T>? = null): Long

	fun source(relation: UUID, paging: Paging): SizedIterable<T>

	/**
	 * Return just UUIDs of the given entity page.
	 */
	fun page(relation: UUID, paging: Paging, block: (T) -> Unit, filter: EntityFilter<T>? = null)

	fun table(): UUIDTable
}
