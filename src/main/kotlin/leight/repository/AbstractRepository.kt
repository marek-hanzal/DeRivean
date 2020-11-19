package leight.repository

import leight.container.AbstractService
import leight.container.IContainer
import leight.storage.IStorage
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import org.jetbrains.exposed.sql.selectAll
import java.util.*
import kotlin.math.max

abstract class AbstractRepository<T : UUIDEntity, U : UUIDTable>(
	val entity: EntityClass<UUID, T>,
	val table: U,
	container: IContainer,
) : AbstractService(container), IRepository<T> {
	protected val storage: IStorage by container.lazy()

	override fun create(block: T.() -> Unit) = entity.new { block(this) }

	override fun delete(uuid: UUID) = storage.write { find(uuid).delete() }

	override fun total(filter: EntityFilter<T>?) = filter?.let { entity.all().filter(it).sumBy { 1 }.toLong() } ?: entity.table.slice(entity.table.id).selectAll().count()

	override fun source(paging: Paging) = entity.all().limit(paging.limit, paging.offset)

	override fun page(paging: Paging, block: (T) -> Unit, filter: EntityFilter<T>?) {
		var current = paging
		var contract = 0
		var size = 1L
		while (contract < size && size > 0) {
			source(current).let { collection ->
				size = collection.count()
				(filter?.let { collection.filter(filter) } ?: collection).let {
					it.take(max(0, size - contract).toInt()).forEach { item -> block(item) }
					contract += it.count()
				}
				current = Paging(current.page + 1, current.limit)
			}
		}
	}

	override fun find(uuid: UUID) = entity.findById(uuid) ?: throw UnknownEntityException("Requested an unknown [${entity.table}] [${uuid}].")

	override fun table() = table

	override fun all() = entity.all()
}
