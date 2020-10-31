package derivean.lib.repository

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
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
	private val column: Column<EntityUUID>,
	container: IContainer,
) : AbstractService(container), IRelationRepository<T> {
	override fun total(relation: UUID) = entity.table.slice(entity.table.id).selectAll().andWhere { column eq relation }.count()

	override fun page(relation: UUID, page: Int, limit: Int, block: (T) -> Unit) = entity.find { column eq relation }.limit(limit, (page * limit).toLong()).forEach { block(it) }

	override fun table() = table
}
