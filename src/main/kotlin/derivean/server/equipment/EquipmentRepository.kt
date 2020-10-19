package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17

typealias EquipmentTable = u2020_10_17.uEquipmentTable
typealias Equipment = u2020_10_17.uEquipment

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
