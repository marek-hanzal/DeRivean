package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.EquipmentEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.EquipmentTable

class EquipmentRepository(container: IContainer) : AbstractRepository<EquipmentEntity, EquipmentTable>(EquipmentEntity, EquipmentTable, container)
