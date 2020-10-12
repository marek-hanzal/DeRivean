package derivean.lib.repository

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.selectAll
import java.util.*

abstract class AbstractRepository<T : UUIDEntity>(val table: UUIDTable, container: IContainer) : AbstractService(container), IRepository<T> {
	protected val storage: IStorage by container.lazy()

	override fun delete(uuid: UUID) = storage.write { getById(uuid).delete() }

	override fun total() = table.slice(table.id).selectAll().count()
}
