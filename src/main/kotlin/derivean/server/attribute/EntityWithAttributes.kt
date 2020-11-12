package derivean.server.attribute

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.sql.SizedIterable

abstract class EntityWithAttributes<T : UUIDEntity>(id: EntityUUID) : UUIDEntity(id) {
	abstract val attributes: SizedIterable<T>
}
