package derivean.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.storage.entities.Role
import derivean.storage.tables.RoleTable

class RoleRepository(container: IContainer) : AbstractRepository<Role, RoleTable>(Role, RoleTable, container) {
	fun findByName(name: String) = entity.find { RoleTable.name eq name }.first()
}
