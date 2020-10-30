package derivean.server.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import org.jetbrains.exposed.dao.EntityClass
import org.jetbrains.exposed.dao.UUIDEntity
import org.jetbrains.exposed.dao.id.UUIDTable
import java.util.*

abstract class AbstractAttributeRepository<T : UUIDEntity, U : UUIDTable>(entity: EntityClass<UUID, T>, table: U, container: IContainer) : AbstractRepository<T, U>(entity, table, container) {
//	fun attributes(id: String, vararg attributes: Attribute) {
//		find(id).let { entity ->
//			entity.attributes.forEach {
//				it.delete()
//			}
//			for (attribute in attributes) {
//				buildingAttributeRepository.create {
//					this.building = building
//					this.name = attribute.first
//					this.value = attribute.second
//				}
//			}
//		}
//	}

//	fun attributes(id: EntityUUID, vararg attributes: Attribute) = attributes(id.toString(), *attributes)
}
