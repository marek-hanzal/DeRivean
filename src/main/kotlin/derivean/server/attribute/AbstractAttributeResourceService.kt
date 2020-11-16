package derivean.server.attribute

import derivean.lib.container.IContainer
import derivean.lib.resource.AbstractResourceService
import derivean.storage.entities.Attribute
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.sql.SizedIterable

abstract class AbstractAttributeResourceService<T : UUIDEntity>(container: IContainer) : AbstractResourceService<T>(container) {
	fun usageOf(resource: String, usage: (T) -> Double): Pair<String, (T) -> Double> = resource to { usage(it) }
	fun valueOf(resource: String, attributes: (T) -> SizedIterable<Attribute>): Pair<String, (T) -> Double?> = resource to { attributes(it).firstOrNull { attribute -> attribute.type.name == resource }?.value }
}
