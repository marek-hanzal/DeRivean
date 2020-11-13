package derivean.server.attribute

import derivean.lib.container.IContainer
import derivean.lib.resource.AbstractResourceService
import derivean.server.attribute.entities.Attribute
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.sql.SizedIterable

abstract class AbstractAttributeResourceService<T : UUIDEntity>(container: IContainer) : AbstractResourceService<T>(container) {
	fun valueOf(resource: String, attributes: (T) -> SizedIterable<Attribute>): Pair<String, (T) -> Double?> = resource to { attributes(it).valueOf(resource) }
}
