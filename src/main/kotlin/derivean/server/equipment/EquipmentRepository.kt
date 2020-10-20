package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.equipment.entities.Equipment
import derivean.server.equipment.entities.EquipmentTable

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
