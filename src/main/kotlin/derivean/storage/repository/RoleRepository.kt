package derivean.storage.repository

import derivean.storage.entities.RoleEntity
import derivean.storage.tables.RoleTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class RoleRepository(container: IContainer) : AbstractRepository<RoleEntity, RoleTable>(RoleEntity, RoleTable, container) {
	fun findByName(name: String) = entity.find { RoleTable.name eq name }.first()
}
