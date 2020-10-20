package derivean.server.equipment

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository

class EquipmentAttributeRepository(container: IContainer) : AbstractRepository<EquipmentAttribute, EquipmentAttributeTable>(EquipmentAttribute, EquipmentAttributeTable, container)
