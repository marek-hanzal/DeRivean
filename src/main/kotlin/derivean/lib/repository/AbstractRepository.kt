package derivean.lib.repository

import derivean.lib.container.IContainer
import derivean.lib.storage.IStorage
import org.jetbrains.exposed.dao.UUIDEntity
import java.util.*

abstract class AbstractRepository<T : UUIDEntity>(container: IContainer) : IRepository<T> {
	protected val storage: IStorage by container.lazy()

	override fun delete(uuid: UUID) = storage.write { getById(uuid).delete() }
}
