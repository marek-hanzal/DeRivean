package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.Attribute
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable

class AttributeRepository(container: IContainer) : AbstractRepository<Attribute, AttributeTable>(Attribute, AttributeTable, container) {
	fun attributes(collection: SizedIterable<Attribute>, attributes: Array<derivean.game.attribute.Attribute>, replace: Boolean = true): SizedCollection<Attribute> {
		if (replace) {
			collection.forEach {
				it.delete()
			}
		}
		TODO("Update attributes!")
//		return SizedCollection(attributes.map {
//			entity.new {
//				this.type = it.first
//				this.value = it.second
//			}
//		})
	}

	fun attributes(collection: SizedIterable<Attribute>, attributes: SizedIterable<Attribute>, replace: Boolean = true): SizedCollection<Attribute> {
		TODO("Update new attribute!")
//		return attributes(collection, attributes.map { derivean.game.attribute.Attribute(it.type.name, it.value) }.toTypedArray(), replace)
	}
}
