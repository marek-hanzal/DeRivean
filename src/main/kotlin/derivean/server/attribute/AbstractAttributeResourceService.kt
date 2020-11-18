package derivean.server.attribute

import derivean.storage.entities.AttributeEntity
import leight.container.IContainer
import leight.resource.AbstractResourceService
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.sql.SizedIterable

abstract class AbstractAttributeResourceService<T : UUIDEntity>(container: IContainer) : AbstractResourceService<T>(container) {
	fun usageOf(resource: String, usage: (T) -> Double): Pair<String, (T) -> Double> = resource to { usage(it) }
	fun valueOf(resource: String, attributes: (T) -> SizedIterable<AttributeEntity>): Pair<String, (T) -> Double?> = resource to { attributes(it).firstOrNull { attribute -> attribute.type.name == resource }?.value }
}
