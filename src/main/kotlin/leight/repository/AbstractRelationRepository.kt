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

abstract class AbstractRelationRepository<T : UUIDEntity, U : UUIDTable>(
	val entity: EntityClass<UUID, T>,
	val table: U,
	val column: Column<EntityUUID>,
	container: IContainer,
) : AbstractService(container), IRelationRepository<T> {
	override fun total(relation: UUID, filter: EntityFilter<T>?) = filter?.let {
		entity.table.selectAll().andWhere { column eq relation }.filter { filter(entity.wrapRow(it)) }.sumBy { 1 }.toLong()
	} ?: entity.table.slice(entity.table.id).selectAll().andWhere { column eq relation }.count()

	override fun page(relation: UUID, page: Int, limit: Int, block: (T) -> Unit, filter: EntityFilter<T>?) {
		entity.find { column eq relation }.limit(limit, (page * limit).toLong()).let { collection ->
			(filter?.let { collection.filter(filter) } ?: collection).forEach { block(it) }
		}
	}

	override fun table() = table
}
