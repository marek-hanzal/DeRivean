package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17
import derivean.server.upgrade.u2020_10_17.EquipmentAttribute

typealias EquipmentAttributeTable = u2020_10_17.EquipmentAttributeTable
typealias EquipmentAttribute = u2020_10_17.EquipmentAttribute

class EquipmentAttributeRepository(container: IContainer) : AbstractRepository<EquipmentAttribute, EquipmentAttributeTable>(EquipmentAttribute, EquipmentAttributeTable, container)
