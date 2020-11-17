package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.EquipmentEntity
import derivean.storage.tables.EquipmentTable

class EquipmentRepository(container: IContainer) : AbstractRepository<EquipmentEntity, EquipmentTable>(EquipmentEntity, EquipmentTable, container)
