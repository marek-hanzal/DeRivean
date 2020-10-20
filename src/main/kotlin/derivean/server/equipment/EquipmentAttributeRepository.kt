package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.equipment.entities.EquipmentAttribute
import derivean.server.equipment.entities.EquipmentAttributeTable

class EquipmentAttributeRepository(container: IContainer) : AbstractRepository<EquipmentAttribute, EquipmentAttributeTable>(EquipmentAttribute, EquipmentAttributeTable, container)
