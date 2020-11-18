package derivean.storage.repository

import derivean.storage.entities.EquipmentEntity
import derivean.storage.tables.EquipmentTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class EquipmentRepository(container: IContainer) : AbstractRepository<EquipmentEntity, EquipmentTable>(EquipmentEntity, EquipmentTable, container)
