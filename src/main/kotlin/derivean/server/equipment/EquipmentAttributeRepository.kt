package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_10_17

typealias EquipmentAttributeTable = u2020_10_17.uEquipmentAttributeTable
typealias EquipmentAttribute = u2020_10_17.uEquipmentAttribute

class EquipmentAttributeRepository(container: IContainer) : AbstractRepository<EquipmentAttribute, EquipmentAttributeTable>(EquipmentAttribute, EquipmentAttributeTable, container)
