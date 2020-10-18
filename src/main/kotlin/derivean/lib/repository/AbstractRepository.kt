package derivean.lib.repository

import derivean.lib.container.AbstractService
import derivean.lib.container.IContainer
import derivean.lib.storage.EntityUUID
import derivean.lib.storage.IStorage
import org.jetbrains.exposed.dao.Entity
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDTable
import org.jetbrains.exposed.sql.selectAll
import java.util.*

abstract class AbstractRepository<T : Entity<UUID>, U : UUIDTable>(val entity: EntityClass<UUID, T>, val table: U, container: IContainer) : AbstractService(container), IRepository<T> {
	protected val storage: IStorage by container.lazy()

	fun create(block: T.() -> Unit) = entity.new { block(this) }

	override fun delete(uuid: UUID) = storage.write { find(uuid).delete() }

	override fun total() = entity.table.slice(entity.table.id).selectAll().count()

	override fun page(page: Int, limit: Int, block: (T) -> Unit) {
		entity.all().limit(limit, page * limit).forEach { block(it) }
	}

	override fun find(uuid: UUID) = entity.findById(EntityUUID(uuid, entity.table)) ?: throw UnknownEntityException("Requested an unknown [${entity.table}] [${uuid}].")
}
