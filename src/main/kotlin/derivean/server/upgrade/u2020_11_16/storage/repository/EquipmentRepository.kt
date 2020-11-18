package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.server.upgrade.u2020_11_16.storage.entities.EquipmentEntity
import derivean.server.upgrade.u2020_11_16.storage.tables.EquipmentTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class EquipmentRepository(container: IContainer) : AbstractRepository<EquipmentEntity, EquipmentTable>(EquipmentEntity, EquipmentTable, container)
