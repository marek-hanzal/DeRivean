package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17
import derivean.server.upgrade.u2020_10_17.Equipment

typealias EquipmentTable = u2020_10_17.EquipmentTable
typealias Equipment = u2020_10_17.Equipment

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
