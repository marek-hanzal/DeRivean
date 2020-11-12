package derivean.server.attribute

import org.jetbrains.exposed.dao.UUIDEntity

typealias EntityWithAttributesType = EntityWithAttributes<out AttributeEntity<out UUIDEntity>>
