package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_20

typealias EquipmentTable = u2020_10_20.uEquipmentTable
typealias Equipment = u2020_10_20.uEquipment

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
