package derivean.server.user

import derivean.lib.container.IContainer
import derivean.lib.repository.AbstractRepository
import derivean.server.user.entities.Role
import derivean.server.user.entities.RoleTable

class RoleRepository(container: IContainer) : AbstractRepository<Role, RoleTable>(Role, RoleTable, container) {
	fun findByName(name: String) = entity.find { RoleTable.name eq name }.first()
}
