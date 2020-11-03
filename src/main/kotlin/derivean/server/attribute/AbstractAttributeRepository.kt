package derivean.server.attribute

import derivean.game.attribute.Attribute
import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.lib.repository.IRepository
import derivean.lib.storage.EntityUUID
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.*

abstract class AbstractAttributeRepository<T : EntityWithAttributes, U : UUIDTable>(
	entity: EntityClass<UUID, T>,
	table: U,
	container: IContainer,
) : AbstractRepository<T, U>(entity, table, container) {
	abstract val attributeRepository: IRepository<out AttributeEntity<T>>

	fun attributes(id: String, attributes: Array<Attribute>, replace: Boolean = true) {
		find(id).let { entity ->
			if (replace) {
				entity.attributes.forEach {
					it.delete()
				}
			}
			for (attribute in attributes) {
				attributeRepository.create {
					this.parent = entity
					this.name = attribute.first
					this.value = attribute.second
				}
			}
		}
	}

	fun attributes(id: EntityUUID, attributes: Array<Attribute>, replace: Boolean = true) = attributes(id.toString(), attributes, replace)
}
