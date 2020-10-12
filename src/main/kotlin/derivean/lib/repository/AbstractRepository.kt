package derivean.lib.repository

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import org.jetbrains.exposed.dao.EntityID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.selectAll
import java.util.*

abstract class AbstractRepository<T : UUIDEntity>(val table: UUIDTable, container: IContainer) : AbstractService(container), IRepository<T> {
	protected val storage: IStorage by container.lazy()

	override fun delete(uuid: UUID) = storage.write { getById(uuid).delete() }

	override fun total() = table.slice(table.id).selectAll().count()

	override fun page(page: Int, limit: Int, block: (EntityID<UUID>) -> Unit) {
//		table.slice(table.id).selectAll().orderBy().forEach {
		table.slice(table.id).selectAll().limit(limit, page * limit).forEach {
			block(it[table.id])
		}
	}
}
