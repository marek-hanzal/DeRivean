package derivean.server.attribute

import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.UUIDEntity

abstract class AttributeEntity<T : UUIDEntity>(id: EntityUUID) : UUIDEntity(id) {
	abstract var parent: T
	abstract var name: String
	abstract var value: Double
}
