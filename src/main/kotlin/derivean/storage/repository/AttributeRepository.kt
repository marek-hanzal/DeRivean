package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.Attribute
import derivean.storage.tables.AttributeTable
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable
import java.util.*

class AttributeRepository(container: IContainer) : AbstractRepository<Attribute, AttributeTable>(Attribute, AttributeTable, container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	fun attributes(collection: SizedIterable<Attribute>, attributes: Array<AttributeData>, replace: Boolean = true): SizedCollection<Attribute> {
		if (replace) {
			collection.forEach {
				it.delete()
			}
		}
		return SizedCollection(attributes.map {
			entity.new {
				this.type = attributeTypeRepository.find(it.type)
				this.value = it.value
			}
		})
	}

	fun attributes(collection: SizedIterable<Attribute>, attributes: SizedIterable<Attribute>, replace: Boolean = true): SizedCollection<Attribute> {
		return attributes(collection, attributes.map { AttributeData(it.type.id.value, it.value) }.toTypedArray(), replace)
	}

	data class AttributeData(
		val type: UUID,
		val value: Double,
	)
}
