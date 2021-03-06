package leight.repository

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.EntityUUID
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.Column
import org.jetbrains.exposed.sql.andWhere
import org.jetbrains.exposed.sql.selectAll
import java.util.*
import kotlin.math.max

abstract class AbstractRelationRepository<T : UUIDEntity, U : UUIDTable>(
	val entity: EntityClass<UUID, T>,
	val table: U,
	val column: Column<EntityUUID>,
	container: IContainer,
) : AbstractService(container), IRelationRepository<T> {
	override fun total(relation: UUID, filter: EntityFilter<T>?) = filter?.let {
		entity.table.selectAll().andWhere { column eq relation }.filter { filter(entity.wrapRow(it)) }.sumBy { 1 }.toLong()
	} ?: entity.table.slice(entity.table.id).selectAll().andWhere { column eq relation }.count()

	override fun source(relation: UUID, paging: Paging) = entity.find { column eq relation }.limit(paging.limit, paging.offset)

	override fun page(relation: UUID, paging: Paging, block: (T) -> Unit, filter: EntityFilter<T>?) {
		var current = paging
		var contract = 0
		var size = 1L
		/**
		 * This is quite a piece of code!
		 *
		 * The idea is to fulfill the contract of page size (for example 10 items), but
		 * they could be filtered by a client side filter (filter parameter); that means the
		 * database return 10 items, but just 7 remains after the filter, thus it's necessary
		 * to fetch another page where will be just 1 item, thus it's necessary to fetch another
		 * page, when the contract will be fulfilled. Or when a collection is empty.
		 */
		while (contract < size && size > 0) {
			source(relation, current).let { collection ->
				size = collection.count()
				(filter?.let { collection.filter(filter) } ?: collection).let {
					it.take(max(0, size - contract).toInt()).forEach { item -> block(item) }
					contract += it.count()
				}
				current = Paging(current.page + 1, current.limit)
			}
		}
	}

	override fun table() = table
}
