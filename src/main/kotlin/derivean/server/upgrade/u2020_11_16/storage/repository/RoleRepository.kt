package derivean.server.upgrade.u2020_11_16.storage.repository

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.upgrade.u2020_11_16.storage.entities.Role
import derivean.server.upgrade.u2020_11_16.storage.tables.RoleTable

class RoleRepository(container: IContainer) : AbstractRepository<Role, RoleTable>(Role, RoleTable, container) {
	fun findByName(name: String) = entity.find { RoleTable.name eq name }.first()
}
