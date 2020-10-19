package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_19_03

typealias EquipmentTable = u2020_10_19_03.uEquipmentTable
typealias Equipment = u2020_10_19_03.uEquipment

class EquipmentRepository(container: IContainer) : AbstractRepository<Equipment, EquipmentTable>(Equipment, EquipmentTable, container)
