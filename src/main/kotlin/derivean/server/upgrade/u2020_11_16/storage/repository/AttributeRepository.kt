package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.AttributeEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.AttributeTable
import org.jetbrains.exposed.sql.SizedCollection
import org.jetbrains.exposed.sql.SizedIterable
import java.util.*

class AttributeRepository(container: IContainer) : AbstractRepository<AttributeEntity, AttributeTable>(AttributeEntity, AttributeTable, container) {
	private val attributeTypeRepository: AttributeTypeRepository by container.lazy()

	fun attributes(collection: SizedIterable<AttributeEntity>, attributes: Array<AttributeData>, replace: Boolean = true): SizedCollection<AttributeEntity> {
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

	fun attributes(collection: SizedIterable<AttributeEntity>, attributes: SizedIterable<AttributeEntity>, replace: Boolean = true): SizedCollection<AttributeEntity> {
		return attributes(collection, attributes.map { AttributeData(it.type.id.value, it.value) }.toTypedArray(), replace)
	}

	data class AttributeData(
		val type: UUID,
		val value: Double,
	)
}
