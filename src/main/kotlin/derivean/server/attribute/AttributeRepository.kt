package derivean.server.attribute

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.attribute.entities.Attribute
import derivean.server.attribute.entities.AttributeTable
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable

class AttributeRepository(container: IContainer) : AbstractRepository<Attribute, AttributeTable>(Attribute, AttributeTable, container) {
	fun attributes(collection: SizedIterable<Attribute>, attributes: Array<derivean.game.attribute.Attribute>, replace: Boolean = true): SizedCollection<Attribute> {
		if (replace) {
			collection.forEach {
				it.delete()
			}
		}
		return SizedCollection(attributes.map {
			entity.new {
				this.name = it.first
				this.value = it.second
			}
		})
	}
}
