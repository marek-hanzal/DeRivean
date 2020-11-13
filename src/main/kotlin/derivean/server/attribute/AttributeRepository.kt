package derivean.server.attribute

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.entities.AttributeTable

class AttributeRepository(container: IContainer) : AbstractRepository<Attribute, AttributeTable>(Attribute, AttributeTable, container)
