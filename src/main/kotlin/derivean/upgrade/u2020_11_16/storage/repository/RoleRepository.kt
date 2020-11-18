package derivean.upgrade.u2020_11_16.storage.repository

import derivean.upgrade.u2020_11_16.storage.entities.RoleEntity
import derivean.upgrade.u2020_11_16.storage.tables.RoleTable
import leight.container.IContainer
import leight.repository.AbstractRepository

class RoleRepository(container: IContainer) : AbstractRepository<RoleEntity, RoleTable>(RoleEntity, RoleTable, container) {
	fun findByName(name: String) = entity.find { RoleTable.name eq name }.first()
}
