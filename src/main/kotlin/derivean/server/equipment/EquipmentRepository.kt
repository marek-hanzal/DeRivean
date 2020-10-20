package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
